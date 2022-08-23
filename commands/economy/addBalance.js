const economy = require('../../economy.js')

module.exports = {
    name: "addbal",
    category: "economy",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {
        const mention = message.mentions.users.first()
        if(!mention)
        {
            message.reply("You dummy, who the hell are you trying to give money to? The air?")
            return
        }

        const coins = args[1]
        if(isNaN(coins))
        {
            message.reply("Goodjob, you mentioned the target, but what are you giving to him/her/it??? Where are the numbers???????")
            return
        }

        const guildId = message.guild.id
        const userId = mention.id

        const newCoins = await economy.addCoins(guildId, userId, coins)

        message.reply(`You have given <@${userId}> ${coins} ezcoins. \nThey have now ${newCoins} ezcoins`)
    }
}