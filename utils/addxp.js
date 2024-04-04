const {PrismaClient}=require('@prisma/client')
const calcXp = require('./calcXp')
const prisma=new PrismaClient()

const addXp=async(waterfootprint,uid)=>{

    console.log(uid);

    const s=JSON.stringify(uid.uid)
    console.log(s);
    const cxp=calcXp(waterfootprint);
    const date=new Date()

    const result=await prisma.xp.findFirst({
        where:{
            uid:s,
            date:date
        }
    })
    
    if(result!=null){
        const totalxp=parseFloat(result.totalXp)+parseFloat(cxp)
        
        await prisma.xp.update({
            where:{
                id:result.id
            },
            data:{
                totalXp:totalxp
            }
        })
    }
    else{
        const userExist=await prisma.xp.findFirst({
            where:{
                uid:s
            }
        })
        if(userExist){
            await prisma.xp.update({
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
            await prisma.xp.create({
                data:{
                    uid:s,
                    totalXp:cxp,
                    date:new Date()
                }
            })
        }
    }
}




module.exports=addXp