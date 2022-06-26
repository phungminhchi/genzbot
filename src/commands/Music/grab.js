const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "grab",
    aliases: ["save"],
    category: "Music",
    description: "Grabs And Sends You The Song That Is Playing At The Moment",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: false,
    execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
            .setColor("#FFC942")
            .setDescription("> Bật bài dì đi nè");
            return message.channel.send({embeds: [thing]});
        }

        const song = player.queue.current
        const total = song.duration;
        const current = player.position;

        const dmbut = new MessageButton().setLabel("Búm dô đây cho nhanh").setStyle("LINK").setURL(`https://discord.com/users/${client.id}`)
        const row = new MessageActionRow().addComponents(dmbut)

        let dm = new MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL()})
        .setDescription(`:mailbox_with_mail: \`Check ib ik bé\``)
        .setColor(client.embedColor)
        .setFooter({text: `Lệnh được thực hiện bởi: ${message.author.tag}`})
        .setTimestamp()
        message.reply({embeds: [dm], components: [row]})
        
        const urlbutt = new MessageButton().setLabel("Linh bài này nè").setStyle("LINK").setURL(song.uri)
        const row2 = new MessageActionRow().addComponents(urlbutt)
        let embed = new MessageEmbed()
            .setDescription(`**Thông tin bài đang bật nè** \n\n > **__Pài__**: [${song.title}](${song.uri}) \n > **__Đang phát ở__**: \`[${convertTime(song.duration)}]\` \n > **__Cd bật bài này__**: [<@${song.requester.id}>] \n > **__Cd lưu bài này__**: [<@${message.author.id}>]`)
            .setThumbnail(song.displayThumbnail())
            .setColor(client.embedColor)
            .addField("\u200b", `\`${convertTime(current)} / ${convertTime(total)}\``)
         return message.author.send({embeds: [embed], components: [row2]})
            
    }
};
