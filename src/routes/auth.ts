import { Request, Response, Router } from "express";
import AuthController from "../controller/auth";
import AuthValidation from "../validation/auth";


const route = Router();

route.get("/user", AuthController.get_user_by_email);

route.patch("/user_verification", AuthController.set_if_verified);

route.get("/users", AuthController.list_of_users);


route.post("/login", AuthValidation.login, AuthController.login);

route.post("/register", AuthValidation.register, AuthController.register);


// route.post("/password/reset", (req, res) => {

//     res.send("This is the password reset page");
// })

export default route;