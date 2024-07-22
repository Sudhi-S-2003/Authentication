import jwt from 'jsonwebtoken'

const generateToken=(res,userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie('jwt',token,{httpOnly:true,secure:process.env.NODE_ENV!== 'development',sameSite:'strict',maxAge:7*2*60*100})

}
export default generateToken;