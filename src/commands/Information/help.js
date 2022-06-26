const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {

  const embed = new MessageEmbed()
    .setTitle(`${client.user.username} Help`)
    .setDescription(` Xin trào iem gái **<@${message.author.id}>**, Bố mày là <@${client.user.id}>.  \n\nmột đứa có thể làm gất nhiều thứ, \nhỗ trợ gất nhiều nguồn\n\n\`🎵\`•Music\n\`🗒️\`•information\n\`💽\`•Playlists\n\`⚙️\`•Config\n\n*Búm mấy nút ở dưới đi bé iu*\n\n`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.embedColor)
    .setTimestamp()
    .setFooter({text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                
    let but1 = new MessageButton().setCustomId("home").setLabel("Trang chính").setStyle("SUCCESS")
  
    let but2 = new MessageButton().setCustomId("music").setLabel("Nhạc ak").setStyle("PRIMARY")
  
    let but3 = new MessageButton().setCustomId("info").setLabel("Thông tin về chị").setStyle("PRIMARY");
    
    let but4 = new MessageButton().setCustomId("playlist").setLabel("Danh sách á").setStyle("PRIMARY");

    let but5 = new MessageButton().setCustomId("config").setLabel("Cấu hình lè").setStyle("PRIMARY");

     let _commands;
     let editEmbed = new MessageEmbed();
     
    const m = await message.reply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] });

    const collector = m.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === message.author.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Có cd **${message.author.tag}** mới xài được lệnh đó hoi`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
		 if(!m) return;
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true),  but5.setDisabled(true))] }).catch(() => {});
    });
    collector.on('collect', async (b) => {
       if(!b.deferred) await b.deferUpdate()
        if(b.customId === "home") {
           if(!m) return;
           return await m.edit({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4,  but5)] })
        }
        if(b.customId === "music") {
         _commands = client.commands.filter((x) => x.category && x.category === "Music").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Music Commands").setFooter({text: `Total ${_commands.length} music commands.`});
           if(!m) return;
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4,  but5)] })
        }
         if(b.customId == "info") {
         _commands = client.commands.filter((x) => x.category && x.category === "Information").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Information Commands").setFooter({text: `Total ${_commands.length} Information commands.`})
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         }
         if(b.customId == "playlist") {
          _commands = client.commands.filter((x) => x.category && x.category === "Playlist").map((x) => `\`${x.name}\``);
              editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Playlist Commands").setFooter({text: `Total ${_commands.length} Playlist commands.`})
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
          }
         if(b.customId == "config") {
         _commands = client.commands.filter((x) => x.category && x.category === "Config").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Config Commands").setFooter({text: `Total ${_commands.length} Config commands.`})
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         
        }
     });
   }
 }
