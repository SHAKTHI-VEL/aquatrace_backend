const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const addData=async (req,res)=>{
    try {
        const{uid,item,waterfootprint,measure}=req.body;
        const result=await prisma.userdata.create({
            data:{
                uid,item,waterfootprint,measure
            }
        })
        return res.status(200).json({success:true,result})
    } catch (error) {
        console.log(error);
        return res.status(400).json({success:false,message:error})
    }
}

module.exports=addData