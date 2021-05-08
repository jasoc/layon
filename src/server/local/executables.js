const iconExtractor = require('file-icon-info');;


class executables {

    constructor(path) {
        this.path = path;
    }

    writeFileIcon(callback) {
        iconExtractor.getIcon(this.path, callback);
    }
}

module.exports = executables;