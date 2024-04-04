const {PrismaClient}=require('@prisma/client')
const calcXp = require('./calcXp')
const prisma=new PrismaClient()

const addXp=async(waterfootprint,uid)=>{

    console.log(uid);

    const s=uid.uid
    console.log(s);
    const cxp=calcXp(waterfootprint);
    const date=new Date()

    const result=await prisma.newxp.findFirst({
        where:{
            uid:s,
            date:date
        }
    })
    console.log(result);
    if(result!=null){
        const totalxp=parseFloat(result.totalXp)+parseFloat(cxp)
        console.log(totalxp);
        await prisma.newxp.update({
            where:{
                id:result.id
            },
            data:{
                totalXp:totalxp
            }
        })
    }
    else{
        const userExist=await prisma.newxp.findFirst({
            where:{
                uid:s
            }
        })
        if(userExist){
            await prisma.newxp.update({
                where:{
                    id:userExist.id
                },
                data:{
                    totalXp:parseFloat(cxp),
                    date:new Date()
                }
            })
        }
        else{
            await prisma.newxp.create({
                data:{
                    uid:s,
                    totalxp:cxp,
                    date:new Date()
                }
            })
        }
    }
}




module.exports=addXp