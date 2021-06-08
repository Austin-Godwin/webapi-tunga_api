"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        // const user1 = new User("sarah", "sarah@yahoo.com", "123456");
        // const user2 = new User("paul", "paul@outlook.com", "password");
        this.users = [];
        this.users = [];
    }
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid email or password");
        user.lastLogin = new Date().toDateString();
        return user.name + " welcome back !";
    };
    Auth.prototype.register = function (userId, email, pwd) {
        var userReg = new user_1.default(userId, email, pwd);
        this.users.push(userReg);
        return userReg.toJson;
    };
    Auth.prototype.listOfUsers = function () {
        // const listOfUsers = [];
        // for (let user of this.users) {
        //     listOfUsers.push(user.toJson)
        // }
        // return listOfUsers;
        return this.users.map(function (user) { return user.toJson; });
    };
    Auth.prototype.getUserByEmail = function (email) {
        var user = this.users.find(function (user) { return user.email.toLowerCase() === email.toLowerCase(); });
        if (!user)
            throw "No matching user found";
        return user.toJson;
    };
    Auth.prototype.setifVerified = function (email, isVerified) {
        var user = this.users.find(function (user) { return user.email.toLowerCase() === email.toLowerCase(); });
        if (!user)
            throw "No matching user found";
        // if(isVerified !== user.isVerified) throw `isVerfied can't be determined`;
        if (isVerified !== true && isVerified !== false)
            throw "The Verification is neither true nor false";
        user.isVerified = true;
        return user.toJson;
    };
    return Auth;
}());
exports.default = Auth;
