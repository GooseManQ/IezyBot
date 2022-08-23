const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("req")
        .setDescription("request a fight")
        .addUserOption((option) => option.setName('user').setDescription("the username").setRequired(true))
        .addStringOption((option) => option.setName('game').setDescription("a game's name").setRequired(true)),
    run: async ({ client, interaction }) => {
        let embed = new MessageEmbed()
        const author = interaction.member
        const cUser = interaction.options.getUser('user')
        const cGame = interaction.options.getString('game')
        
        await interaction.editReply({ embeds: 
            [
                embed
                .setColor('LUMINOUS_VIVID_PINK')
                .setTitle(`**Pvp Request**`)
                .setDescription(`${author} challenged ${cUser} to a fight in ${cGame}`)
                .setFooter("Made by Ghostly2#4928")
            ]
        })
    },
}