const path = require('path');
const rootDir = require("../util/path");

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};

exports.postContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form-submit.html'));
}