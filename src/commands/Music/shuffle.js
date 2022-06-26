const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "shuffle",
    category: "Music",
    description: "Shuffle queue",
    args: false,
    usage: "",
    permission: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
    
		const player = client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("Huhu order nhạc ik nè");
            return message.reply({embeds: [thing]});
        }
        player.queue.shuffle();
        
        const emojishuffle = client.emoji.shuffle;

        let thing = new MessageEmbed()
            .setDescription(`${emojishuffle} Đảo cái hàng chờ gòi đó nhe `)
            .setColor(client.embedColor)
            .setTimestamp()
        return message.reply({embeds: [thing]}).catch(error => client.logger.log(error, "error"));
	
    }
};