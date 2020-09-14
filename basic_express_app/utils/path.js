const path = require('path')

module.exports.makeAbsolutePath = (...paths) => {
    return path.join(path.dirname(process.mainModule.filename), ...paths)
} 