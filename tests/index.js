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

try {
  checkTestFilesExists()
} catch (e) {
  console.error(e)

  process.exit(1)
}

namespace.forEach((namespace) => {
  const rulesPath = path.resolve(__dirname, namespace)

  const cli = new CLIEngine({
    configFile: `./dist/${namespace}.js`,
    ignore: false,
  })

  describe(namespace, () => {
    describe('good', () => {
      goodReportTest(cli.executeOnFiles(getReportPattern(FILE_GOOD, rulesPath)))
    })

    describe('bad', () => {
      badReportTest(cli.executeOnFiles(getReportPattern(FILE_BAD, rulesPath)))
    })
  })
})
