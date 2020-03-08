import pkg from '../../package.json'

export default `
/**
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Author: ${pkg.author}
 * Version: ${pkg.version}
 *
 * 此文件是由脚本 scripts/build.js 自动生成
 */
`
