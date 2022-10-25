const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";
if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: .rol-koruma aç && kapat**"
      );

          message.channel.send({ embeds: [embed] });
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed2 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Görünüşe göre rol koruma zaten aktif!**");

      message.channel.send({ embeds: [embed2] })
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed3 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Rol koruma başarıyla açıldı!**");

      message.channel.send({ embeds: [embed3] });
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed4 = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription("**Rol Koruma başarıyla kapandı!**");

   message.channel.send({ embeds: [embed4] });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rolkoruma"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "rol-koruma"
};