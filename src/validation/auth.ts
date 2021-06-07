import { NextFunction, Request, Response } from "express";





export default class AuthValidation {




    static login(req: Request, res: Response, next: NextFunction) {

        const { email, pwd } = req.body;

        if (typeof email !== "string") throw "Email must be a string"

        if (typeof pwd !== "string") throw "pwd must be a string"

        if (pwd.length < 6) throw "Password must not be less than six (6) characters";


        next();
    }

    static register(req: Request, res: Response, next: NextFunction) {
        const { userId, email, pwd } = req.body;

        if (typeof userId !== "string") throw "Name must be combination of letter A-Z";

        if (userId.length <= 2) throw "Name must be more than 2 characters";

        if (typeof email !== "string") throw "invalid Email creation";

        if (email.indexOf("@") == -1 || undefined) throw "No Email provider";

        if (typeof pwd !== "string") throw "pwd must be a string";

        if (pwd.length < 6) throw "Password must not be less than six (6) characters";

        next();
        
    }



}




