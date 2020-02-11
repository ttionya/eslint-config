const path = require('path')
const { CLIEngine } = require('eslint')
const { namespace } = require('../libs/namespace')
const {
  FILE_GOOD,
  FILE_BAD,
  checkTestFilesExists,
  getReportPattern,
  goodReportTest,
  badReportTest,
} = require('../libs/utils/test')

const root = path.join(__dirname, '..')

try {
  checkTestFilesExists()
} catch (e) {
  console.error(e)

  process.exit(1)
}

namespace.forEach((namespace) => {
  const ruleNamespacePath = path.join(__dirname, namespace)

  const cli = new CLIEngine({
    configFile: path.join(root, 'dist', `${namespace}.js`),
    ignore: false,
    useEslintrc: false,
  })

  describe(namespace, () => {
    describe('good', () => {
      goodReportTest(cli.executeOnFiles(getReportPattern(FILE_GOOD, ruleNamespacePath)))
    })

    describe('bad', () => {
      badReportTest(cli.executeOnFiles(getReportPattern(FILE_BAD, ruleNamespacePath)))
    })
  })
})
