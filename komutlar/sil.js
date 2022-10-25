const Discord = require('discord.js');
const moment = require("moment");
  exports.run = (client, message, args, embed, author, channel, guild) => {
        
           if (!message.member.permissions.has("ADMINISTRATOR")) 
    return message.reply({content:`> **Komutu Kullanmak İçin Yetkin Bulunmamakta!**`})
.catch((err) => console.log(err))
.then((beşx) => setTimeout(() => { beşx.delete(); }, 10000));
           if (!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(`> **${message.author}, Eksik Komut Kullandınız, **.sil 1/100**`).then((beşx) => setTimeout(() => { beşx.delete(); }, 5000));
           message.channel.bulkDelete(Number(args[0]))
           message.channel.send(`> **${args[0]}** Adet Mesajı Sildim Bro ~Beleşşş`).then((beşx) => setTimeout(() => { beşx.delete(); }, 5000));
  };

exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: false, //dmde kullanıma açık mı değil mi
  aliases: ["temizle", "sil"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "sil", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};