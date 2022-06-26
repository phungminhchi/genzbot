const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "remove",
    category: "Music",
  	description: "Remove song from the queue",
	args: true,
    usage: "<Number of song in queue>",
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
                .setDescription("Hk có bật bài nào hết");
            return message.reply({embeds: [thing]});
        }

    const position = (Number(args[0]) - 1);
       if (position > player.queue.size) {
        const number = (position + 1);
         let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`Số ${number} hk có trong hàng chờ.\nTổng bài nè: ${player.queue.size}`);
            return message.reply({embeds: [thing]});
        }

    const song = player.queue[position]
		player.queue.remove(position);

		const emojieject = client.emoji.remove;

		let thing = new MessageEmbed()
			.setColor(client.embedColor)
			.setTimestamp()
			.setDescription(`${emojieject} Xóa bài\n[${song.title}](${song.uri}) ròi nhe`)
		  return message.reply({embeds: [thing]});
	
    }
};