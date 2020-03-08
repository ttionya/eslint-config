import path from 'path'
import { CLIEngine } from 'eslint'
import { namespace } from '../libs/namespace'
import {
  FILE_GOOD,
  FILE_BAD,
  checkTestFilesExists,
  getReportPattern,
  goodReportTest,
  badReportTest,
} from '../libs/utils/test'

const root = path.join(__dirname, '..')

try {
  checkTestFilesExists()
} catch (e) {
  console.error(e)

  process.exit(1)
}

namespace.forEach((namespace): void => {
  const ruleNamespacePath = path.join(__dirname, namespace)

  const cli = new CLIEngine({
    // 此处要直接使用根目录上的配置文件，否则 parserServices 会找不到路径
    configFile: path.join(root, `${namespace}.js`),
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
