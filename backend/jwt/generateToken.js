import jwt from 'jsonwebtoken'

const createTokenAndSaveCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.SECRET_KEY,{
        expiresIn:'10d',
        });
        res.cookie('jwt',token,{
            httpOnly:true,  //access
            secure:true,
            sameSite:"strict"       //csrf
})
}
export default createTokenAndSaveCookie;