import User from "./user";



export default class Auth {



    users:Array<User> = [];

    constructor() {
        // const user1 = new User("sarah", "sarah@yahoo.com", "123456");
        // const user2 = new User("paul", "paul@outlook.com", "password");

        this.users = []
    }

    login(email:string, pwd:string) {
        const user = this.users.find((e) => {
            const isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });

        if (!user) throw new Error("invalid email or password");

        user.lastLogin = new Date().toDateString();

        return user.name + " welcome back !";
    }

    register(userId:string, email:string, pwd:string) {
        const userReg = new User(userId, email, pwd);

        this.users.push(userReg);

        return userReg.toJson;


    }

    listOfUsers() {
        // const listOfUsers = [];

        // for (let user of this.users) {
        //     listOfUsers.push(user.toJson)
        // }

        // return listOfUsers;

        return this.users.map((user) => user.toJson);
    }

    getUserByEmail(email:string) {
        const user = this.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if(!user) throw "No matching user found";

        return user.toJson;
    }

    setifVerified(email:string, isVerified:boolean) {
        const user = this.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if(!user) throw "No matching user found";

        // if(isVerified !== user.isVerified) throw `isVerfied can't be determined`;
        if(isVerified !== true && isVerified !== false) throw "The Verification is neither true nor false";
        user.isVerified = Boolean(isVerified);

        return user.toJson;
    }
}





