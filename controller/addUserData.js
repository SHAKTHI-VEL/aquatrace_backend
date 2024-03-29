const {PrismaClient}=require('@prisma/client')
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
                return res.status(200).json({success:true,result})
            }
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({success:false,message:error})
    }
}

module.exports=addData