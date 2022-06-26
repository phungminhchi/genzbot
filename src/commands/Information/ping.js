const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
  await message.reply({ content: "Từ từ cd ơi" }).then(async (msg) => {
  const ping = msg.createdAt - message.createdAt;
  const api_ping = client.ws.ping;

  const PingEmbed = new MessageEmbed()
    .setAuthor({ name: "Xong rồi nè 😏", iconURL: client.user.displayAvatarURL()})
    .setColor(client.embedColor)
    .addField("Độ trễ của bot", `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, true)
    .addField("Độ trễ của API", `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, true)
    .setFooter({ text: `Cd bấm lệnh: ${message.author.username}`, iconURL:  message.author.avatarURL({ dynamic: true })})
    .setTimestamp();

  await msg.edit({
    content: "\`🤡\`",
    embeds: [PingEmbed]
  })
 })
 }
}