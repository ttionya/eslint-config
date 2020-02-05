const { sync: rimrafSync } = require('rimraf')
const { sync: mkdirpSync } = require('mkdirp')
const { namespace } = require('../libs/namespace')
const Generator = require('../libs/utils/generator')

const generator = new Generator()

// 移除 dist 目录
rimrafSync(generator.dist)

// 新建 dist 目录
mkdirpSync(generator.dist)

namespace.forEach((namespace) => generator.generateToDist(namespace))

console.log('done')
