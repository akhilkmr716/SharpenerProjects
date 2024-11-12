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
        fs.readFile(path.join(rootDir, 'data', 'product.json'), (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(path.join(rootDir, 'data', 'product.json'), JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        try {
            const products = fs.readFileSync(path.join(rootDir, 'data', 'product.json'));
            return JSON.parse(products);
        } catch(err) {
            console.error(err);
            return [];
        }
        
    }
}