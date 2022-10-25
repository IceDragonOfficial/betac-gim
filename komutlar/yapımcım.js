const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.MessageEmbed()
  .setTitle('Yapımcılarım')
  .setDescription(`**<@${process.env.sahip4}>**\n**<@${process.env.sahip2}>**\n**<@${process.env.sahip3}>**\n***Seviyom Ben Bunları Yahu***`)
  .setColor("RANDOM")
  .setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif")
  message.channel.send({embeds: [embed]})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: '',
  usage: 'yapımcım'
};