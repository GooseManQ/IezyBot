const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "sub",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-1002620488897531994").setStyle("DANGER").setLabel("Get Notified When Iezy Uploads!")
                ])
            ]
        })
    }
}