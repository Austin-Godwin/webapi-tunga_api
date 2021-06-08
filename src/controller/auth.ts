import { Request, Response} from "express";
import Auth from "../modules/auth";

const auth = new Auth();

class AuthController{





    static login(req:Request, res:Response) {

        const {email, pwd} = req.body;

        // if (email !== "john@gmail.com" || pwd !== "123456") {
        //     throw new Error("email address or password is incorrect")
        // }

        const result = auth.login(email, pwd);

        res.send({message: result});
    }

    static register(req:Request, res:Response) {

        const {userId, email, pwd} = req.body;

        const result = auth.register(userId, email, pwd);

        res.send({message: "Account sucessfully created", data: result});
    }

    static list_of_users(req:Request, res:Response) {

        const list = auth.listOfUsers();

        res.send(list);
    }

    static get_user_by_email(req:Request, res:Response) {

        const {email} = req.query;

        const user = auth.getUserByEmail(email as string || "");

        res.send(user);

    }

    static set_if_verified(req:Request, res:Response) {

        const {email, isVerified} = req.body;

        const result = auth.setifVerified(email as string, isVerified);

        res.send({mesage:"Account successfully update", data: result});
    }


}








export default AuthController;



