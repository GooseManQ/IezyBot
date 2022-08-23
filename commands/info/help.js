module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply({
            embeds: [
                new MessageEmbed()
                .setTitle("Command List")
                .setDescription("**Prefixes**\nThe Iezy Bot prefix starts with !i\n\n**Commands**\n>`!isub`: get notified when iezy uploads\n`!i")
                .setColor("BLUE")
            ]
        })
    }
}