const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "volume",
    aliases: ["v", "vol"],
    category: "Music",
    description: "Change volume of currently playing music",
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
                .setDescription("Hk có bật bài nào cả.");
            return message.reply({embeds: [thing]});
		}
		
		const volumeEmoji = client.emoji.volumehigh;

		if (!args.length) {
			let thing = new MessageEmbed()
			.setColor(client.embedColor)
			.setTimestamp()
			.setDescription(`${volumeEmoji} Họng t đang to cỡ : **${player.volume}%**`)
			return message.reply({embeds: [thing]});
		}

		const volume = Number(args[0]);
		
		if (!volume || volume < 0 || volume > 100) { 
			let thing = new MessageEmbed()
                .setColor("RED")
				.setDescription(`Usage: ${prefix}volume từ 1 tới 100 thôi má`)
            return message.reply({embeds: [thing]});
		}

		player.setVolume(volume);

		if (volume > player.volume) {
			var emojivolume = client.emoji.volumehigh;
			let thing = new MessageEmbed()
				.setColor(client.embedColor)
				.setTimestamp()
				.setDescription(`${emojivolume} Độ rộng của vòm họng đã được chỉnh đến tầm **${volume}%**`)
		  return message.reply({embeds: [thing]});
		} else if (volume < player.volume) {
			var emojivolume = message.client.emoji.volumelow;
			let thing = new MessageEmbed()
				.setColor(client.embedColor)
				.setTimestamp()
				.setDescription(`${emojivolume} Độ rộng của vòm họng đã được chỉnh đến tầm **${volume}%**`)
		  return message.reply({embeds: [thing]});
		} else {
			let thing = new MessageEmbed()
				.setColor(client.embedColor)
				.setTimestamp()
				.setDescription(`${volumeEmoji} Độ rộng của vòm họng đã được chỉnh đến tầm **${volume}%**`)
			return message.reply({embeds: [thing]});
		}
		
 	}
};
