
const { Client, Message, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const load = require('lodash');
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "queue",
    category: "Music",
    aliases: ["q"],
    description: "Show the music queue and now playing.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
   execute: async (message, args, client, prefix) => {
  
            const player = client.manager.get(message.guild.id);
       const queue = player.queue;  
       
           if (!player.queue.current)
      return message.reply({
        content: `Bạn nàm shao, có bật bài nào đâu mà đòi coi hàng chờ.`,
      });
   if(!player) return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription(`Hk có bật bài nào hết`)]});
            
            if(!player.queue) return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription(`Order nhạc ik`)]});
           
            if(player.queue.length === "0" || !player.queue.length) {
                const embed = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`Đang phát bài này nè: [${player.queue.current.title}](${player.queue.current.uri}) • \`[${convertTime(queue.current.duration)}]\` • [${player.queue.current.requester}]`)

                await message.channel.send({
                    embeds: [embed]
                }).catch(() => {});
            } else {
                const queuedSongs = player.queue.map((t, i) => `\`${++i}\` • ${t.title} • \`[${convertTime(t.duration)}]\` • [${t.requester}]`);

                const mapping = load.chunk(queuedSongs, 10);
                const pages = mapping.map((s) => s.join("\n"));
                let page = 0;

                if(player.queue.size < 11) {
                    const embed = new MessageEmbed()
                    .setColor(client.embedColor)
                    .setDescription(`**Đang hát**\n > [${player.queue.current.title}](${player.queue.current.uri}) • \`[${convertTime(queue.current.duration)}]\`  • [${player.queue.current.requester}]\n\n**Queued Songs**\n${pages[page]}`)
                    .setTimestamp()
                    .setFooter({ text: `Trang ${page + 1}/${pages.length}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                    .setThumbnail(player.queue.current.thumbnail)
                    .setTitle(`${message.guild.name} mấy bài sắp hát`)

                    await message.channel.send({
                        embeds: [embed]
                    })
                } else {
                    const embed2 = new MessageEmbed()
                    .setColor(client.embedColor)
                    .setDescription(`**Đamg hát bài**\n > [${player.queue.current.title}](${player.queue.current.uri}) • \`[${convertTime(queue.current.duration)}]\` • [${player.queue.current.requester}]\n\n**Queued Songs**\n${pages[page]}`)
                    .setTimestamp()
                    .setFooter({ text: `Cd này kêu t hát nè: ${message.author.tag}`, iconURL:  message.author.displayAvatarURL({ dynamic: true })})
                    .setThumbnail(player.queue.current.thumbnail)
                    .setTitle(`${message.guild.name} hàng chờ`)

                    const but1 = new MessageButton()
                    .setCustomId("queue_cmd_but_1")
                  
                    .setEmoji("⏭")
                    .setStyle("PRIMARY")

                    const but2 = new MessageButton()
                    .setCustomId("queue_cmd_but_2")
                    .setEmoji("⏮")
                    .setStyle("PRIMARY")

                    const but3 = new MessageButton()
                    .setCustomId("queue_cmd_but_3")
                    .setLabel(`${page + 1}/${pages.length}`)
                    .setStyle("SECONDARY")
                    .setDisabled(true)

                    const row1 = new MessageActionRow().addComponents([
                        but2, but3, but1
                    ]);

                    const msg = await message.channel.send({
                        embeds: [embed2],
                        components: [row1]
                    })

                    const collector = message.channel.createMessageComponentCollector({
                        filter: (b) => {
                            if(b.user.id === message.author.id) return true;
                            else {
                                b.reply({
                                    ephemeral: true,
                                    content: `Có cd **${message.author.tag}** mới xài được lệnh đó hoi`
                                });
                                return false;
                            };
                        },
                        time: 60000*5,
                        idle: 30e3
                    });

                    collector.on("collect", async (button) => {
                        if(button.customId === "queue_cmd_but_1") {
                            await button.deferUpdate().catch(() => {});
                            page = page + 1 < pages.length ? ++page : 0;

                            const embed3 = new MessageEmbed()
                            .setColor(client.embedColor)
                            .setDescription(`**Đang hát bài**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[${convertTime(queue.current.duration)}]\` • [${player.queue.current.requester}]\n\n**Bài sắp hát**\n${pages[page]}`)
                            .setTimestamp()
                            .setFooter({ text: `Người order ${message.author.tag}`, iconURL:  message.author.displayAvatarURL({ dynamic: true })})
                            .setThumbnail(player.queue.current.thumbnail)
                            .setTitle(`${message.guild.name} Hàng chờ`)

                            await msg.edit({
                                embeds: [embed3],
                                components: [new MessageActionRow().addComponents(but2, but3.setLabel(`${page + 1}/${pages.length}`), but1)]
                            })
                        } else if(button.customId === "queue_cmd_but_2") {
                            await button.deferUpdate().catch(() => {});
                            page = page > 0 ? --page : pages.length - 1;

                            const embed4 = new MessageEmbed()
                            .setColor(client.embedColor)
                            .setDescription(`**Đang hát bài**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[${convertTime(queue.current.duration)}]\` • [${player.queue.current.requester}]\n\n**Bài sắp hát**\n${pages[page]}`)
                            .setTimestamp()
                            .setFooter({ text: `Order bởi: ${message.author.tag}`, iconURL:  message.author.displayAvatarURL({ dynamic: true })})
                           .setThumbnail(player.queue.current.thumbnail)
                            .setTitle(`${message.guild.name} Hàng chờ`)

                            await msg.edit({
                                embeds: [embed4],
                                components: [new MessageActionRow().addComponents(but2, but3.setLabel(`Trang ${page + 1}/${pages.length}`), but1)]
                 }).catch(() => {});
                        } else return;
                    });

                    collector.on("end", async () => {
                        await msg.edit({
                            components: []
                        })
                    });
                }
            }
       }
  };
