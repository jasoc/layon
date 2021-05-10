const os = require('os');
const fs = require('fs');
const path = require('path');
const checkData = require('../jsonwriter');

class storage {

    constructor() {
        let chk = new checkData(`C:/Users/${os.userInfo().username}/Documents/Layon/icons`, '');
        this.layonPath = `Layon`;
        this.basePath = path.join(`${os.homedir()}`, 'Documents');
        this.fullPath = path.join(this.basePath, this.layonPath);

        this.subPaths = {
            "icons": path.join(this.fullPath, "icons")
        };
    }

    async addIcon(name, base64Data) {
        require('fs').writeFileSync(path.join(
            this.subPaths["icons"], `${name}.png`),
            base64Data,
            {encoding: 'base64'},
            (err) => { console.log(err); }
        );
    }

    async addIconPlaceholder(name) {
        require('fs').writeFileSync(path.join(
            this.subPaths["icons"], `${name}.png`),
            '',
            {encoding: 'base64'},
            (err) => { console.log(err); }
        );
    }

    getIcon(name) {
        let p = path.join(this.subPaths["icons"], `${name}.png`);

        if (fs.existsSync(p))
            return p;

        return null;
    }

    getIconForced(name) {
        return path.join(this.subPaths["icons"], `${name}.png`);
    }
}

module.exports = storage;