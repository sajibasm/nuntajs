
export class Utils {

    private fs = require('fs');

    constructor() {}

    public getAllFiles(dir){
        // get all 'files' in this directory
        const all = this.fs.readdirSync(dir);
        // process each checking directories and saving files
        return all.map(file => {
            // am I a directory?
            if (this.fs.statSync(`${dir}/${file}`).isDirectory()) {
                // recursively scan me for my files
                return this.getAllFiles(`${dir}/${file}`);
            }
            // WARNING! I could be something else here!!!
            return `${dir}/${file}`;     // file name (see warning)
        });
    }

    public readFile(path) {

    }

};



