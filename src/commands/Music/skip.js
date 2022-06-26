const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "skip",
	aliases: ["s"],
	category: "Music",
	description: "Skip the currently playing song",
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
                .setDescription("Khong có bật bài nào cả");
         return message.reply({embeds: [thing]});
        }
        const song = player.queue.current;

           player.stop();
           
		const emojiskip = message.client.emoji.skip;

		let thing = new MessageEmbed()
			.setDescription(`${emojiskip} **Bỏ bài **\n[${song.title}](${song.uri}) rồi`)
			.setColor(message.client.embedColor)
			.setTimestamp()
		return message.reply({embeds: [thing]}).then(msg => { setTimeout(() => {msg.delete()}, 3000);
       })
	
    }
};