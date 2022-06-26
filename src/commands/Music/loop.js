const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "loop",
    aliases: ['l'],
    category: "Music",
    description: "Toggle music loop",
    args: false,
    usage: "",
    permission: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("CÓ BẬT BÀI NÀO ĐÂU CDL");
            return message.reply({ embeds: [thing] });
        }
        const emojiloop = message.client.emoji.loop;

        if (args.length && /queue/i.test(args[0])) {
            player.setQueueRepeat(!player.queueRepeat);
            const queueRepeat = player.queueRepeat ? "bật" : "tắt";
            let thing = new MessageEmbed()
                .setColor(message.client.embedColor)
                .setTimestamp()
                .setDescription(`${emojiloop} Chế độ nghe quài một bài để cài view cho sếp đang **${queueRepeat}**`)
            return message.reply({ embeds: [thing] });
        }

        player.setTrackRepeat(!player.trackRepeat);
        const trackRepeat = player.trackRepeat ? "bật" : "tắt";
        let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setTimestamp()
            .setDescription(`${emojiloop} Chế độ nghe quài một track đang **${trackRepeat}**`)
        return message.reply({ embeds: [thing] });
    }
};