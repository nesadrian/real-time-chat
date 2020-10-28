const jwt = require("jsonwebtoken");

const key = "secret";

const encodeToken = data => jwt.sign(data, key)

const decodeToken = token => jwt.verify(token, key);

modules.exports = {
    encodeToken,
    decodeToken
}
