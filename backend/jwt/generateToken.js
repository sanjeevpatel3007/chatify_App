import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_TOKEN_KEY,{
        expiresIn:'10d',
        });
        res.cookie('jwt',token,{
            httpOnly:true,  //access
            secure:true,
            sameSite:"strict" ,
            maxAge: 10 * 24 * 60 * 60 * 1000,       
});
res.set('Authorization', `Bearer ${token}`);


// res.status(200).json({
//     message: 'Token created and saved in cookies successfully',
//     token,  // Optionally, send token back if you want to use it in other ways
//   });



};
export default createTokenAndSaveCookie;