const fs = require('fs');

class JsonWriter {

    constructor(folder, file) {
        this.folder = folder;
        this.file = file;
        this.checkData();
    }

    checkData() {
        try {
            if(!fs.existsSync(this.folder))
                fs.mkdir(this.folder, (err) => { });
    
            if(!fs.existsSync(this.folder + this.file))
                fs.writeFileSync(this.folder + this.file, "[]", (err) => {});
        } catch(Err) { }
    }

    pushToJson(obj) {

        let data = JSON.parse(fs.readFileSync(this.folder + this.file));

        data.push(obj);

        fs.writeFileSync(this.folder + this.file, JSON.stringify(data, null, 4));
    }

    readData() {
        
        let data = JSON.parse(fs.readFileSync(this.folder + this.file));

        return data;
    }

}

module.exports = JsonWriter;
