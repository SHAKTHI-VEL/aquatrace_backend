const { PrismaClient } = require('@prisma/client');
const addXp = require('../utils/addxp');
const calcXp = require('../utils/calcXp');
const prisma = new PrismaClient();

const addData = async (req, res) => {
    try {
        const { uid, item, quantity, measure } = req.body;

        let findWaterfootprint;

        if (measure === 'mins') {
            findWaterfootprint = await prisma.activity.findFirst({
                where: {
                    activity: item
                }
            });
        } else if (measure === "grams" || measure === "katori" || measure === "cup" || measure === "bowl" || measure === "serving") {
            findWaterfootprint = await prisma.food.findFirst({
                where: {
                    fooditems: item
                }
            });
        }

        if (findWaterfootprint) {
            const result = await prisma.userdata.create({
                data: {
                    uid, item, quantity, measure, waterfootprint: findWaterfootprint.waterfootprint * quantity
                }
            });

            const date = new Date();
            const cxp = calcXp(findWaterfootprint.waterfootprint);

            const existingXp = await prisma.xp.findFirst({
                where: {
                    uid: uid,
                    date: date
                }
            });

            if (existingXp) {
                const totalxp = parseFloat(existingXp.totalxp) + parseFloat(cxp);

                await prisma.xp.update({
                    where: {
                        id: existingXp.id
                    },
                    data: {
                        totalxp: totalxp
                    }
                });
            } else {
                await prisma.xp.create({
                    data: {
                        uid: uid,
                        totalxp: cxp,
                        date: date
                    }
                });
            }

            return res.status(200).json({ success: true, result });
        } else {
            return res.status(404).json({ success: false, message: 'Waterfootprint data not found for the specified item.' });
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = addData;
