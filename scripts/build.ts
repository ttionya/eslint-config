import { sync as rimrafSync } from 'rimraf'
import { sync as mkdirpSync } from 'mkdirp'
import { namespace } from '../libs/namespace'
import Generator from '../libs/utils/generator'

const generator = new Generator()

// 移除 dist 目录
rimrafSync(generator.dist)

// 新建 dist 目录
mkdirpSync(generator.dist)

namespace.forEach((namespace) => generator.generateToDist(namespace))

console.log('done')
