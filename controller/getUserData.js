const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const getUserData=async(req,res)=>{
    try {
        const uid=req.params.uid
        if(typeof(id)===undefined){
            return res.status(400).json({success:false,message:'Enter a appropriate id'})
        }
        const result=await prisma.userdata.findMany({
            where:{
                uid:{
                    equals:uid 
                }
    
            }
        })
        return res.status(200).json({success:true,result})
    } catch (error) {
        console.log(error);
        return res.status(400).json({success:false,message:error})
    }
}

module.exports=getUserData