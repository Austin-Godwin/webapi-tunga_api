"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthValidation = /** @class */ (function () {
    function AuthValidation() {
    }
    AuthValidation.login = function (req, res, next) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof pwd !== "string")
            throw "pwd must be a string";
        if (pwd.length < 6)
            throw "Password must not be less than six (6) characters";
        next();
    };
    AuthValidation.register = function (req, res, next) {
        var _a = req.body, userId = _a.userId, email = _a.email, pwd = _a.pwd;
        if (typeof userId !== "string")
            throw "Name must be combination of letter A-Z";
        if (userId.length <= 2)
            throw "Name must be greater than 2";
        if (typeof email !== "string")
            throw "invalid Email creation";
        if (email.indexOf("@") === -1 || undefined)
            throw "No Email provider";
        if (typeof pwd !== "string")
            throw "pwd must be a string";
        if (pwd.length < 6)
            throw "Password must not be less than six (6) characters";
    };
    return AuthValidation;
}());
exports.default = AuthValidation;
