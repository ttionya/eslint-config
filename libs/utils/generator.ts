import path from 'path'
import { readFileSync, writeFileSync, lstatSync } from 'fs'
import { sync as globSync } from 'glob'
import { sync as cpFileSync } from 'cp-file'
import prettier from 'prettier'
import eslintrcMeta from './meta'
import { IRule } from '../../typings'

const root = path.join(__dirname, '../..')
const dist = 'dist'

class Generator {
  // 配置文件输出目录
  public dist = path.join(root, dist)

  // 当前规则 namespace
  private ruleNamespace = 'babel'

  // 当前 namespace 的规则列表
  private ruleList: IRule[] = []

  // 当前 namespace 的模板文本
  private eslintrcContent = ''

  // 当前 namespace 的所有规则合并后的包含注释的文本
  private rulesContent = ''

  /**
   * 生成配置文件到 dist 目录和根目录
   * @param {string} ruleNamespace
   */
  public generateToDist(ruleNamespace: string): void {
    if (!ruleNamespace) {
      throw Error('必须传入配置命名空间')
    }

    this.ruleNamespace = ruleNamespace
    this.ruleList = this.getRuleList()

    this.eslintrcContent = this.getEslintrcContent()
    this.rulesContent = this.getRulesContent()

    const content = eslintrcMeta + this.eslintrcContent.replace(/rules:\s*\{}/, `rules: { ${this.rulesContent} }`)

    // 使用 prettier 格式化并写入文件
    this.writeFileWithPrettier(content)

    // 拷贝 dist 到根目录
    this.copyDistToRoot()
  }

  /**
   * 获得 .eslintrc 模板文本
   * @return {string}
   * @private
   */
  private getEslintrcContent(): string {
    const initEslintrc = path.join(root, 'tests', this.ruleNamespace, 'index.js')

    return readFileSync(initEslintrc, 'utf-8')
  }

  /**
   * 获得当前配置的规则列表
   * @return {IRule[]}
   * @private
   */
  private getRuleList(): IRule[] {
    const ruleList = globSync(path.join(root, `tests/${this.ruleNamespace}/[a-z]*/*`))

    return ruleList
      .filter((rulePath) => {
        // 存在新建时项目 eslint 报错的情况
        return lstatSync(rulePath).isDirectory()
      })
      .map((rulePath) => {
        return this.getRule(rulePath)
      })
      .reduce((last, current) => {
        return last.concat(current)
      }, [])
  }

  /**
   * 获得单条规则的规则集合
   * @param {string} rulePath 规则文件夹的绝对路径
   * @return {IRule[]}
   * @private
   */
  private getRule(rulePath: string): IRule[] {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const ruleConfig = require(`${rulePath}/.eslintrc.js`).rules
    let ruleComment = ''

    // 规则注释
    const fileContent = readFileSync(path.join(rulePath, '.eslintrc.js'), 'utf-8')
    const ruleComments = /\/\*\*.*\*\//gms.exec(fileContent)
    if (ruleComments) {
      ruleComment = ruleComments[0]
    }

    // 规则集合
    return Object
      .entries(ruleConfig)
      .map(([ruleName, ruleValue]) => {
        return {
          name: ruleName,
          value: ruleValue,
          comments: ruleComment,
        }
    })
  }

  /**
   * 获得当前配置组合过的规则文本，包含注释
   * @return {string}
   * @private
   */
  private getRulesContent(): string {
    return this.ruleList
      .map((rule) => `\n\n${rule.comments}\n'${rule.name}': ${JSON.stringify(rule.value, null, 4)},`)
      .join('')
  }

  /**
   * 使用 prettier 格式化并写入文件
   * @param {string} content
   * @private
   */
  private writeFileWithPrettier(content: string): void {
    const formattedContent = prettier.format(content, {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      ...require(`${root}/.prettierrc.js`),
      parser: 'babel',
    })

    writeFileSync(path.join(this.dist, `${this.ruleNamespace}.js`), formattedContent, 'utf-8')
  }

  /**
   * 复制一份生成的规则到根目录，以便调试
   * @private
   */
  private copyDistToRoot(): void {
    const distFiles = globSync(path.join(this.dist, '*.js'))
    distFiles.forEach((file) => {
      cpFileSync(file, file.replace(dist, ''))
    })
  }
}

export default Generator
