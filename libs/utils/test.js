const path = require('path')
const { readFileSync } = require('fs')
const { assert } = require('chai')
const { sync: globSync } = require('glob')
const { namespace } = require('../namespace')

const FILE_GOOD = 'good'
const FILE_BAD = 'bad'
const FILE_ESLINTRC = '.eslintrc'
const FILE_EXT = ['js', 'vue', 'ts']

/**
 * 验证测试文件是否都存在
 */
const checkTestFilesExists = () => {
  namespace.forEach((namespace) => {
    const rulesPath = globSync(path.resolve(__dirname, '../../tests', namespace, '*/*'))

    rulesPath.forEach((rulePath) => {
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
 * @param {number} fileName 文件名
 * @param {string} rulesPath
 * @return {string[]}
 */
const getReportPattern = (fileName, rulesPath) => {
  return [
    path.join(rulesPath, '**', `${fileName}.+(${FILE_EXT.join('|')})`),
  ]
}

/**
 * 测试正确用例
 * @param {LintReport} goodReports
 */
const goodReportTest = (goodReports) => {
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
const badReportTest = (badReports) => {
  badReports.results.forEach((badReport) => {
    const { filePath, errorCount } = badReport

    const ruleName = path.basename(path.dirname(filePath))
    const shouldErrorCount = getBadReportErrorCount(filePath)

    it(ruleName, () => {
      assert.notEqual(shouldErrorCount, -1, `Can't read ${filePath} error count.`)
      assert.notEqual(errorCount, shouldErrorCount, `${filePath} should have more than 1 error.`)
    })
  })
}

module.exports = {
  FILE_GOOD,
  FILE_BAD,
  FILE_ESLINTRC,
  FILE_EXT,

  checkTestFilesExists,
  getReportPattern,
  goodReportTest,
  badReportTest,
}

/**
 * 获得错误用例具体错误数
 * @param {string} filePath 绝对地址
 * @return {number}
 */
function getBadReportErrorCount(filePath) {
  const badReportContent = readFileSync(filePath, 'utf-8')
  const match = /\/\/ errorCount (\d)+/.exec(badReportContent)

  if (match) {
    return +match[0]
  }

  return -1
}
