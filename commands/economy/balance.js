const economy = require('../../economy.js')

module.exports = {
    name: "bal",
    category: "economy",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const target = message.mentions.users.first()||message.author
        const targetId = target.id

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        message.reply(`That user has ${coins} coins`)
    }
}