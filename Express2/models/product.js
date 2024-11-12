const fs = require('fs');
const path = require('path');
const rootDir = require("../util/path");

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        //products.push(this);
        //console.log(JSON.stringify(this));
        fs.appendFile(path.join(rootDir, "data", "product.ndjson"), JSON.stringify(this) + "\n", (err) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('Data appended to File!!!');
        });
    }

    static fetchAll() {
        try {
            const data = fs.readFileSync(path.join(rootDir, "data", "product.ndjson"));
            const products = data.toString().trim().split("\n").map((e) => JSON.parse(e));
            return products;
        } catch(err) {
            console.error(err);
        }
    }
}