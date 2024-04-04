const {PrismaClient}=require('@prisma/client');
const addXp = require('../utils/addxp');
const calcXp = require('../utils/calcXp');
const prisma=new PrismaClient()

const addData=async (req,res)=>{
    try {
        const{uid,item,quantity,measure}=req.body;
        if(measure==='mins'){
            const findWaterfootprint=await prisma.activity.findFirst({
                where:{
                    activity:item
                }
            })
            const result=await prisma.userdata.create({
                data:{
                    uid,item,quantity,measure,waterfootprint:findWaterfootprint.waterfootprint*quantity
                }
            })
            const date=new Date()
            const cxp=calcXp(findWaterfootprint.waterfootprint)


            const results=await prisma.xp.findFirst({
                where:{
                    uid:uid,
                    date:date
                }
            })
            
            if(results!=null){
                const totalxp=parseFloat(results.totalxp)+parseFloat(cxp)
                
                await prisma.xp.update({
                    where:{
                        id:results.id
                    },
                    data:{
                        totalxp:totalxp
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
                            id:userExist.id
                        },
                        data:{
                            totalxp:parseFloat(cxp),
                            date:new Date()
                        }
                    })
                }
                else{
                    await prisma.xp.create({
                        data:{
                            uid:uid,
                            totalxp:cxp,
                            date:new Date()
                        }
                    })
                }
            }
            return res.status(200).json({success:true,result})
        }
        else{
            if(measure==="grams"){
                const findWaterfootprint=await prisma.food.findFirst({
                    where:{
                        fooditems:item
                    }
                })
                const result=await prisma.userdata.create({
                    data:{
                        uid,item,quantity,measure,waterfootprint:findWaterfootprint.waterfootprint*quantity
                    }
                })
                const date=new Date()
                const cxp=calcXp(findWaterfootprint.waterfootprint);
                const results=await prisma.xp.findFirst({
                    where:{
                        uid:uid,
                        date:date
                    }
                })
                
                if(results!=null){
                    const totalxp=parseFloat(result.totalxp)+parseFloat(cxp)
                    
                    await prisma.xp.update({
                        where:{
                            id:results.id
                        },
                        data:{
                            totalxp:totalxp
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
                                id:userExist.id
                            },
                            data:{
                                totalxp:parseFloat(cxp),
                                date:new Date()
                            }
                        })
                    }
                    else{
                        await prisma.xp.create({
                            data:{
                                uid:uid,
                                totalxp:cxp,
                                date:new Date()
                            }
                        })
                    }
                }
                return res.status(200).json({success:true,result})
            }
            if(measure==="katori"){
                const findWaterfootprint=await prisma.food.findFirst({
                    where:{
                        fooditems:item
                    }
                })
                const result=await prisma.userdata.create({
                    data:{
                        uid,item,quantity,measure,waterfootprint:findWaterfootprint.waterfootprint*quantity*124
                    }
                })
                const date=new Date()
                const cxp=calcXp(findWaterfootprint.waterfootprint);
                const results=await prisma.xp.findFirst({
                    where:{
                        uid:uid,
                        date:date
                    }
                })
                
                if(results!=null){
                    const totalxp=parseFloat(result.totalxp)+parseFloat(cxp)
                    
                    await prisma.xp.update({
                        where:{
                            id:results.id
                        },
                        data:{
                            totalxp:totalxp
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
                                id:userExist.id
                            },
                            data:{
                                totalxp:parseFloat(cxp),
                                date:new Date()
                            }
                        })
                    }
                    else{
                        await prisma.xp.create({
                            data:{
                                uid:uid,
                                totalxp:cxp,
                                date:new Date()
                            }
                        })
                    }
                }
                return res.status(200).json({success:true,result})
            }
            if(measure==="cup"){
                const findWaterfootprint=await prisma.food.findFirst({
                    where:{
                        fooditems:item
                    }
                })
                const result=await prisma.userdata.create({
                    data:{
                        uid,item,quantity,measure,waterfootprint:findWaterfootprint.waterfootprint*quantity*206
                    }
                })
                const date=new Date()
                const cxp=calcXp(findWaterfootprint.waterfootprint);

                const results=await prisma.xp.findFirst({
                    where:{
                        uid:uid,
                        date:date
                    }
                })
                
                if(results!=null){
                    const totalxp=parseFloat(result.totalxp)+parseFloat(cxp)
                    
                    await prisma.xp.update({
                        where:{
                            id:results.id
                        },
                        data:{
                            totalxp:totalxp
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
                                id:userExist.id
                            },
                            data:{
                                totalxp:parseFloat(cxp),
                                date:new Date()
                            }
                        })
                    }
                    else{
                        await prisma.xp.create({
                            data:{
                                uid:uid,
                                totalxp:cxp,
                                date:new Date()
                            }
                        })
                    }
                }
                return res.status(200).json({success:true,result})
            }

            if(measure=="bowl"){
                const findWaterfootprint=await prisma.food.findFirst({
                    where:{
                        fooditems:item
                    }
                })
                const result=await prisma.userdata.create({
                    data:{
                        uid,item,quantity,measure,waterfootprint:findWaterfootprint.waterfootprint*quantity*290
                    }
                })
                const date=new Date()
                const cxp=calcXp(findWaterfootprint.waterfootprint);
                const results=await prisma.xp.findFirst({
                    where:{
                        uid:uid,
                        date:date
                    }
                })
                
                if(results!=null){
                    const totalxp=parseFloat(result.totalxp)+parseFloat(cxp)
                    
                    await prisma.xp.update({
                        where:{
                            id:results.id
                        },
                        data:{
                            totalxp:totalxp
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
                                id:userExist.id
                            },
                            data:{
                                totalxp:parseFloat(cxp),
                                date:new Date()
                            }
                        })
                    }
                    else{
                        await prisma.xp.create({
                            data:{
                                uid:uid,
                                totalxp:cxp,
                                date:new Date()
                            }
                        })
                    }
                }
                return res.status(200).json({success:true,result})
            }

            if(measure=="serving"){
                const findWaterfootprint=await prisma.food.findFirst({
                    where:{
                        fooditems:item
                    }
                })
                const result=await prisma.userdata.create({
                    data:{
                        uid,item,quantity,measure,waterfootprint:findWaterfootprint.waterfootprint*quantity*100
                    }
                })
                const date=new Date()
                const cxp=calcXp(findWaterfootprint.waterfootprint);
                const results=await prisma.xp.findFirst({
                    where:{
                        uid:uid,
                        date:date
                    }
                })
                
                if(results!=null){
                    const totalxp=parseFloat(result.totalxp)+parseFloat(cxp)
                    
                    await prisma.xp.update({
                        where:{
                            id:results.id
                        },
                        data:{
                            totalxp:totalxp
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
                                id:userExist.id
                            },
                            data:{
                                totalxp:parseFloat(cxp),
                                date:new Date()
                            }
                        })
                    }
                    else{
                        await prisma.xp.create({
                            data:{
                                uid:uid,
                                totalxp:cxp,
                                date:new Date()
                            }
                        })
                    }
                }
                return res.status(200).json({success:true,result})
            }
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({success:false,message:error})
    }
}

module.exports=addData