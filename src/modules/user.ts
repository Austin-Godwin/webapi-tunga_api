




export default class User {

    name = "";
    email = "";
    pwd = "";
    private _isVerified = false;
    private _lastLogin = "";

    constructor(name:string, email:string, password:string) {
        this.name = name;
        this.email = email;
        this.pwd = password;
        this._isVerified = false;
        this._lastLogin = new Date().toDateString()
    }

    get isVerified() {
        return this._isVerified;
    }

    get lastLogin() {
        return this._lastLogin;
    }

    set isVerified(arg:boolean) {
        this._isVerified = arg;
    }

    set lastLogin(date:string) {
        this._lastLogin = date;
    }

    get toJson() {
        return {
            userId: this.name,
            email: this.email,
            password: "******",
            isVerified: this.isVerified === true ? "Yes" : "No",
            lastLogin: this._lastLogin
        }
    }

    //Question
    /*How do you get users details, do you create an html form to get the user details or what can one do? */



}



