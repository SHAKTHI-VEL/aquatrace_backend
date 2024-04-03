const {PrismaClient}=require('@prisma/client')
const calcXp = require('./calcXp')
const prisma=new PrismaClient()

const addXp=async(waterfootprint,uid)=>{

    const cxp=calcXp(waterfootprint);

    const result=await prisma.xp.findFirst({
        where:{
            uid:uid,
            date:new Date()
        }
    })
    if(result){
        await prisma.xp.update({
            where:{
                uid:uid
            },
            data:{
                totalXp:result.totalXp+cxp
            }
        })
    }
    else{
        const userExist=await prisma.xp.findFirst({
            where:{
                uid:uid
            }
        })
        if(userExist){
            await prisma.xp.update({
                where:{
                    uid:uid
                },
                data:{
                    totalXp:cxp,
                    date:new Date()
                }
            })
        }
        else{
            await prisma.xp.create({
                data:{
                    uid:uid,
                    totalXp:cxp,
                    date:new Date()
                }
            })
        }
    }
}

module.exports=addXp