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

        return {
            userId: userReg.name,
            email: userReg.email,
            password: userReg.pwd
        }


    }
}





