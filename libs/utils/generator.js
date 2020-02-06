const path = require('path')
const { readFileSync, writeFileSync, lstatSync } = require('fs')
const { sync: globSync } = require('glob')
const prettier = require('prettier')
const eslintrcMeta = require('./meta')

const root = path.join(__dirname, '../..')

class Generator {
  constructor() {
    this.dist = path.join(root, 'dist')
    this.ruleNamespace = ''
    this.ruleList = []
    this.rulesContent = ''
  }

  /**
   * 生成配置文件到 dist 目录
   * @param {string} ruleNamespace
   */
  generateToDist(ruleNamespace) {
    if (!ruleNamespace) {
      throw Error('必须传入配置命名空间')
    }

    this.ruleNamespace = ruleNamespace
    this.ruleList = this.getRuleList()

    this.eslintrcContent = this.getEslintrcContent()
    this.rulesContent = this.getRulesContent()

    const content = eslintrcMeta + this.eslintrcContent.replace(/rules:\s*\{}/, `rules: { ${this.rulesContent} }`)

    this.writeFileWithPrettier(content)
  }

  /**
   * 获得当前配置的规则列表
   * @return {Rule[]}
   * @private
   */
  getRuleList() {
    const ruleList = globSync(path.join(root, `tests/${this.ruleNamespace}/[a-z]*/*`))

    return ruleList
      .filter((rulePath) => {
        // 存在新建时项目 eslint 报错的情况
        return lstatSync(rulePath).isDirectory()
      })
      .map((rulePath) => {
        return this.getRule(rulePath)
      })
  }

  /**
   * 获得单条规则
   * @param {string} rulePath 规则文件夹的绝对路径
   * @return {Rule}
   * @private
   */
  getRule(rulePath) {
    const ruleConfig = require(`${rulePath}/.eslintrc.js`).rules
    const ruleName = Object.keys(ruleConfig)[0]
    const ruleValue = ruleConfig[ruleName]

    /**
     * @name Rule
     * @property {string} name
     * @property {string|Array} value
     * @property {string} comments
     */
    const rule = {
      name: ruleName,
      value: ruleValue,
      comments: '',
    }

    // 规则注释
    const fileContent = readFileSync(path.join(rulePath, '.eslintrc.js'), 'utf-8')
    const ruleComments = /\/\*\*.*\*\//gms.exec(fileContent)
    if (ruleComments) {
      rule.comments = ruleComments[0]
    }

    return rule
  }

  /**
   * 获得 .eslintrc 模板文本
   * @return {string}
   * @private
   */
  getEslintrcContent() {
    const initEslintrc = path.join(root, 'tests', this.ruleNamespace, 'index.js')

    return readFileSync(initEslintrc, 'utf-8')
  }

  /**
   * 获得当前配置组合过的规则文本，包含注释
   * @return {string}
   * @private
   */
  getRulesContent() {
    return this.ruleList
      .map((rule) => `\n\n${rule.comments}\n'${rule.name}': ${JSON.stringify(rule.value, null, 4)},`)
      .join('')
  }

  /**
   * 写入文件并使用 prettier 格式化
   * @param {string} content
   * @private
   */
  writeFileWithPrettier(content) {
    const formattedContent = prettier.format(content, {
      ...require(`${root}/.prettierrc.js`),
      parser: 'babel',
    })

    writeFileSync(path.join(this.dist, `${this.ruleNamespace}.js`), formattedContent, 'utf-8')
  }

  /**
   * 生成 eslintrc 规则
   * @param {string} ruleNamespace
   * @return {object}
   */
  generateEslintrcRules(ruleNamespace) {
    if (!ruleNamespace) {
      throw Error('必须传入配置命名空间')
    }

    const rules = {}

    this.ruleNamespace = ruleNamespace
    this.ruleList = this.getRuleList()
    this.ruleList.forEach(({ name, value }) => rules[name] = value)

    return rules
  }
}

module.exports = Generator
