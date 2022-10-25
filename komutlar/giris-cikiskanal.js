const db = require("quick.db");
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('Yetkiniz Bulunmamaktadır!');

const kanal = message.mentions.channels.first()

if(!kanal) return message.reply({content: "Bir kanal etiketlemelisin."})
db.set(`gckanal_${message.guild.id}`, kanal.id)
message.reply({content: `Giriş çıkış kanalı ${kanal} olarak ayarlandı`})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hg-bb", "hgbb"],
  permLevel: 0
}

exports.help = {
  name: 'giriş-çıkış-kanal'
};