import path from 'path'
import { readFileSync } from 'fs'
import { assert } from 'chai'
import { sync as globSync } from 'glob'
import { CLIEngine } from 'eslint'
import { namespace } from '../namespace'

const root = path.join(__dirname, '../..')

export const FILE_GOOD = 'good'
export const FILE_BAD = 'bad'
export const FILE_ESLINTRC = '.eslintrc'
export const FILE_EXT = ['js', 'vue', 'ts']

/**
 * 验证测试文件是否都存在
 */
export const checkTestFilesExists = (): void => {
  namespace.forEach((namespace) => {
    const ruleList = globSync(path.join(root, 'tests', namespace, '*/*'))

    ruleList.forEach((rulePath) => {
      [
        FILE_GOOD,
        FILE_BAD,
        FILE_ESLINTRC,
      ].forEach((fileName) => {
        const file = globSync(`${rulePath}/${fileName}.+(${FILE_EXT.join('|')})`)

        if (!file.length) {
          throw Error(`${rulePath} lost ${fileName} file.`)
        }
      })
    })
  })
}

/**
 * 返回用例的查询模式
 * @param {string} fileName 文件名
 * @param {string} ruleNamespacePath
 * @return {string[]}
 */
export const getReportPattern = (fileName: string, ruleNamespacePath: string): string[] => {
  return [
    path.join(ruleNamespacePath, '**', `${fileName}.+(${FILE_EXT.join('|')})`),
  ]
}

/**
 * 测试正确用例
 * @param {LintReport} goodReports
 */
export const goodReportTest = (goodReports: CLIEngine.LintReport): void => {
  goodReports.results.forEach((goodReport) => {
    const { filePath, errorCount } = goodReport

    const ruleName = path.basename(path.dirname(filePath))

    it(ruleName, () => {
      assert.equal(errorCount, 0, `${filePath} should have no error.`)
    })
  })
}

/**
 * 测试错误用例
 * @param {LintReport} badReports
 */
export const badReportTest = (badReports: CLIEngine.LintReport): void => {
  badReports.results.forEach((badReport) => {
    const { filePath, errorCount } = badReport

    const ruleName = path.basename(path.dirname(filePath))
    const shouldErrorCount = getBadReportErrorCount(filePath)

    it(ruleName, () => {
      assert.notEqual(shouldErrorCount, -1, `Can't read ${filePath} error count.`)
      assert.equal(errorCount, shouldErrorCount, `${filePath} should have ${shouldErrorCount} errors.`)
    })
  })
}

/**
 * 获得错误用例具体错误数
 * @param {string} filePath 绝对地址
 * @return {number}
 */
function getBadReportErrorCount(filePath: string): number {
  const badReportContent = readFileSync(filePath, 'utf-8')
  const match = /\/\/ errorCount (\d+)/.exec(badReportContent)

  if (match) {
    return +match[1]
  }

  return -1
}
