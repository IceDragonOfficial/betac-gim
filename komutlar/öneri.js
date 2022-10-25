const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
{embeds:[new Discord.MessageEmbed()
.setDescription('Kullanım: .öneri <öneri>')]});
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Öneriniz Bildirildi!')
message.channel.send({embeds:[embed]})
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Önerisi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.setThumbnail(message.author.avatarURL)
.addField("Önerisi", type)
client.channels.cache.get('1028690949234245810').send({embeds:[embed2]});
};
exports.conf = {
  aliases: ["bildir"]
};
exports.help = {
  name: 'öneri'
};