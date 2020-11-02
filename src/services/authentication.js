const jwt = require("jsonwebtoken");

const key = "secret";

const encodeToken = data => jwt.sign(data, key)

const decodeToken = token => jwt.verify(token, key);

const authReq = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        const authenticated = decodeToken(token);
        if (authenticated) {
            next();
        }
        else {
            return res.sendStatus(403);
        }
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    encodeToken,
    decodeToken,
    authReq
}
