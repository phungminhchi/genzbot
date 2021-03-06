const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "about",
    description: "Show Lavamusic project information",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
   const row = new MessageActionRow()
       .addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/chinsu/lavamusic"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/gfcv94hDhv")
			);

      const mainPage = new MessageEmbed()
            .setAuthor({ name: 'LavaMusic', iconURL: 'https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png'})
            .setThumbnail('https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png')
            .setColor('#303236')
            .addField('Creator', '[Blacky#6618](https://github.com/chinsu) ', true)
            .addField('Organization', '[Blacky](https://github.com/chinsu)', true)
            .addField('Repository', '[Here](https://github.com/chinsu/lavamusic)', true)
            .addField('\u200b',
                `[LavaMusic](https://github.com/chinsu/lavamusic/) is [Blacky](https://github.com/chinsu)`
            )
        await interaction.followUp({embeds: [mainPage], components: [row]});
    }
}
