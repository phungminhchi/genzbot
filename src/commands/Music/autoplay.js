const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "autoplay",
  aliases: ["ap"],
  category: "Music",
  description: "Toggle music autoplay",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.get(message.guild.id);

    const autoplay = player.get("autoplay");

    const emojireplay = client.emoji.autoplay;
    
    if (!player.queue.current)
      return message.reply({
        content: `Bật một bài đi em iu`,
      });
    
    if (autoplay === false) {
      const identifier = player.queue.current.identifier;
      player.set("autoplay", true);
      player.set("requester", message.author);
      player.set("identifier", identifier);
      const search = `https://www.youtube.com/watch?v=${identifier}&list=RD${identifier}`;
      res = await player.search(search, message.author);
      player.queue.add(res.tracks[1]);
      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setTimestamp()
        .setDescription(`${emojireplay} tự động phát rồi nè, đi ngủ ik`);
      return message.channel.send({ embeds: [thing] });
    } else {
      player.set("autoplay", false);
      player.queue.clear();
      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setTimestamp()
        .setDescription(`${emojireplay} Chào ngày mới nắng tươi, tắt tự động phát ròi nhe`);

      return message.channel.send({ embeds: [thing] });
    }
  },
};
