const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Yetersiz Yetki Gereken => YÖNETİCİ")

    if (!args[0] || !["aç", "kapat"].includes(args[0])){
      const ce = new Discord.MessageEmbed()
      .setTitle("LÜTFEN KOMUTU DOĞRU KULLAN")
      .setColor("RED")
      .addField("Sadece Belirli Bir Kanalda Açmak İçin", "`.küfür-engel aç #KANAL`")
      .addField("Tüm Sunucuda Açmak İçin", "`.küfür-engel aç`")
      .addField("Sistemi Belirli Bir Kanalda Kapatmak İçin", "`.küfür-engel kapat #KANAL`")
      .addField("Tüm Sunucuda Kapatmak İçin", "`.küfür-engel kapat`")
      message.channel.send({ embeds: [ce] })
      }
 
  if(args[0] === "aç"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.set("cd2."+cc.id+message.guild.id, "Kanal")
      message.channel.send("**<#"+cc.id+"> İsimli Kanalda Küfür Engelleme Sistemi Açıldı!**")
    } else {
      db.set("cd1."+message.guild.id, "Sunucu")
      message.channel.send("**Küfür Engelleme Sistemi Tüm Sunucuda Açıldı!**")
    }
  }
}

exports.conf = {
  aliases: ["küfürengel", "küfür-engel",'kfrengel']
};

exports.help = {
  name: "küfür-engel"
}