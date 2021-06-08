"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../modules/auth"));
var auth = new auth_1.default();
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        // if (email !== "john@gmail.com" || pwd !== "123456") {
        //     throw new Error("email address or password is incorrect")
        // }
        var result = auth.login(email, pwd);
        res.send({ message: result });
    };
    AuthController.register = function (req, res) {
        var _a = req.body, userId = _a.userId, email = _a.email, pwd = _a.pwd;
        var result = auth.register(userId, email, pwd);
        res.send({ message: "Account sucessfully created", data: result });
    };
    AuthController.list_of_users = function (req, res) {
        var list = auth.listOfUsers();
        res.send(list);
    };
    AuthController.get_user_by_email = function (req, res) {
        var email = req.query.email;
        var user = auth.getUserByEmail(email || "");
        res.send(user);
    };
    AuthController.set_if_verified = function (req, res) {
        var _a = req.body, email = _a.email, isVerified = _a.isVerified;
        var result = auth.setifVerified(email, isVerified);
        res.send({ mesage: "Account successfully update", data: result });
    };
    return AuthController;
}());
exports.default = AuthController;
