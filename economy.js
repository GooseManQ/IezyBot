// const { model } = require('mongoose')
const mongoose = require('./mongo.js')
const profileSchema = require('./schemas/profileSchema.js')

const coinsCache = {}

module.exports = async(client) => {}

module.exports.addCoins = async (guildId, userId, coins) => {
    return await mongoose().then(async (mongoose) => {
        try{
            console.log('Running FOaU')
            const res = await profileSchema.findOneAndUpdate({
                guildId,
                userId,
            },{
                guildId,
                userId,
                $inc: {
                    coins
                }
            },{
                upsert: true,
                new: true,
            })

            console.log(`Result: ${res}`)

            coinsCache[`${guildId}-${userId}`] = res.coins

            return res.coins
        } finally{
            mongoose.connection.close()
        }
    })
}
module.exports.getCoins = async (guildId, userId) => {
    const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue)
    {
        return cachedValue
    }

    return await mongoose().then(async (mongoose) => {
        try{
            console.log('Running FO()')

            const result = await profileSchema.findOne({
                guildId,
                userId,
            })

            console.log(`Result: ${result}`)

            let coins=500
            if(result){
                coins = result.coins
            } else {
                console.log('inserting doc')
                await new profileSchema({
                    guildId,
                    userId,
                    coins,
                }).save()
            }

            coinsCache[`${guildId}-${userId}`] = coins

            return coins
        } finally{
            mongoose.connection.close()
        }
    })
}