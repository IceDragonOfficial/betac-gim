const Discord = require("discord.js");
const moment = require("moment");
const momentduration = require("moment-duration-format");

exports.run = async (bot, message, args) => {

  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const cse = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`:information_source:  ${bot.user.username} İstatistik`)
    .setDescription(
      `:information_source: **Botun Yapımcısı** **<@${config.sahip}>\n**
       :information_source: **Botun Ortak yapımcıları** **<@${config.sahip2}> <@${config.sahip3}>\n**
       **:information_source: Toplam Kullanıcı:** __` +
        bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
        `\n__**:information_source:  Toplam Sunucu:** __` +
        bot.guilds.cache.size.toLocaleString() +
        `\n__**:information_source: Toplam Kanal:** __` +
        bot.channels.cache.size.toLocaleString() +
        `__\n \n` +
        `:information_source:  **Çalışma Süresi: **__${seksizaman}__\n \n` +
        `:information_source:  **Botun Sürümü:** **${config.version}**
        `
   
    )
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif");
  return message.channel.send({ embeds: [cse] })
};

exports.conf = {
  aliases: ["b", "statistics",'istatistik']
};

exports.help = {
  name: "botbilgi"
}