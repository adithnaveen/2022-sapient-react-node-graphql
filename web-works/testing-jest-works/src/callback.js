const request = require("request");


module.exports = (url, callback) => {
    if (url !== 'http://localhost:3000/api/test') {
        callback(Error("URL is wrong"));
    } else {
        request(url, (err, resp, body) => {
            if (err) {
                callback(err);
            } else {
                callback(null, body);
            }
        })
    }
}