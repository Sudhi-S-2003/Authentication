import moongose from "mongoose";
import bcryptjs from "bcryptjs"
const userschema =moongose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        role:{type:String,required:true,default:"user"}
    },{
        timestamps:true
    }
);
userschema.pre("save",async function(next){
    if(this.isModified("password"))
        {
            this.password=await bcryptjs.hash(this.password,10)
        }
            next()
    })
const User=moongose.model("User",userschema)
export default User;