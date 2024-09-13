import jwt from "jsonwebtoken"
import User from "../models/user.models.js"

 const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
       
        if (!token) {
            return res.status(401).json({
                error: "No token ...authorized deniend "
            })
           }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY)
        
        if (!decoded) {
            return res.status(401).json({ error: "Invalid Token  .." })
        }
        const user =await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error : "No user found"})
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in secureRoute :", error);
        res.status(500).json({
            error: "Internal server error in secureRoute"
        })

    }
}
export default secureRoute;