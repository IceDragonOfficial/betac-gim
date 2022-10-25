const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports.run = async (client, message, args) => {

const prefix = "."

if (!message.member.permissions.has("EMBED_LINKS")) return message.reply("Yetersiz Yetki Gereken => EMBED_LINKS")

let buton = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Moderasyon ")
.setEmoji("🛠️")
.setCustomId("moderasyon")
let buton1 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Eğlence")
.setEmoji("💎")
.setCustomId("eğlence")
let buton2 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Genel ")
.setEmoji("⚙️")
.setCustomId("genel")
let buton3 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Koruma")
.setEmoji("🛡")
.setCustomId("koruma")
let buton4 = new MessageButton()
.setStyle("DANGER")
.setLabel("Ekonomi")
.setEmoji("💰")
.setCustomId("ekonomi")
let buton5 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("AnaSayfa")
.setEmoji("🏠")
.setCustomId("anasayfa")
let buton6 = new MessageButton()
.setStyle("DANGER")
.setLabel("Süre Doldu")
.setDisabled(true)
.setCustomId("süre doldu")

let embed = new MessageEmbed()
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setDescription(`> Botun komutları hakkında bilgi almak için istediğiniz seçeneğin butonuna tıklayın!`)
.addField("・`🛠️ Moderasyon` ↷",
"> Butonuna tıklayarak **Moderasyon Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`💎 Eğlence` ↷",
"> Butonuna tıklayarak **Eğlence Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`⚙️ Genel` ↷",
"> Butonuna tıklayarak **Genel Komutlar** hakkında bilgi alabilirsiniz.")
.addField("・`🛡 Koruma ` ↷",
"> Butonuna tıklayarak **Koruma Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`💰 Ekonomi` ↷",
"> Butonuna tıklayarak **Ekonomi Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`🏠 Anasayfa` ↷",
"> Butonuna tıklayarak bu sayfaya geri dönersiniz.")
.setFooter(`${message.author.username} tarafından kullanıldı. ${prefix}botbilgi Yazarak Bot Hakkında Bilgi Alabilirsiniz`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif");

message.channel.send({embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3, buton4]})]}).then(async msg => {

const filter = x => x.user.id === message.author.id
let collector = msg.createMessageComponentCollector({ filter, time: 300000 })

collector.on("collect", async button => {
if(button.customId === "moderasyon") {

let moderasyon = new MessageEmbed()
.setAuthor(`${client.user.username} Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`> Botun moderasyon komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}ban <@üye>** Üyeyi banlarsınız.

**${prefix}kick <@üye> <Sebebi Belirtiniz> ** Üyeyi kicklersiniz.

**${prefix}hgbb #kanal** gelen-giden sistemi açmanıza yarar.

**${prefix}otorol** Otorol Hakkında Bilgi Alırsınız.

**${prefix}sa-as**  Sa-as hakkında bilgi alırsınız

**${prefix}sil <miktar>** Mesajları Silmeye Yarar

**${prefix}mute <@üye> <süre> ** Kullanıcıysa TimeOut Atarsınız

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif")
msg.edit({content: "🛠️ Moderasyon", embeds: [moderasyon], components: [new MessageActionRow({ components: [buton5]})]})

}

if(button.customId === "eğlence") {

let eğlence = new MessageEmbed()
.setAuthor(`${client.user.username} Eğlence Komutları`, client.user.avatarURL())
.setDescription(`> Botun Eğlence komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}sarıl <@üye>** Etiketlediğiniz Kişiye Sarılırsınız.

**${prefix}öp <@üye>** Etiketlediğiniz Kişiyi Öpersiniz

**${prefix}aşkölçer <@üye>** Etiketlediğiniz Kişiyle Aşkınızı Ölçersiniz
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif")
msg.edit({content: "💎 Eğlence", embeds: [eğlence], components: [new MessageActionRow({ components: [buton5]})]})

}

if(button.customId === "genel") {

let bot = new MessageEmbed()
.setAuthor(`${client.user.username} Sahip Komutları`, client.user.avatarURL())
.setDescription(`> Botun Genel komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
` 
**${prefix}öneri <öneriniz>** Öneri Vermenize Yarar

**${prefix}yapımcım** Botun Yapımcılarını Gösterir

**${prefix}sunucubilgi** Sunucu hakkında bilgi alırsınız.

**${prefix}afk <afk sebebi>** afk olmanıza yarar.

**${prefix}say** Sunucunuzdaki toplam üye sayısını Insan ve bot olarak 2 ayrı sekilde de belirtir.
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif")
msg.edit({content: "⚙️ Genel", embeds: [bot], components: [new MessageActionRow({ components: [buton5]})]})

}
if(button.customId === "koruma") {

let koruma = new MessageEmbed()
.setAuthor(`${client.user.username} Koruma Komutları`, client.user.avatarURL())
.setDescription(`> Botun Koruma komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}küfürengel**

**${prefix}rolkoruma**
`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif")
msg.edit({content: "🛡 Koruma", embeds: [koruma], components: [new MessageActionRow({ components: [buton5]})]})

}
if(button.customId === "ekonomi") {

let ekonomi = new MessageEmbed()
.setAuthor(`${client.user.username} Ekonomi Komutları`, client.user.avatarURL())
.setDescription(`> Botun Ekonomi komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}param Envanterinizi incelersiniz.**

**${prefix}ağaçkes Eğer baltanız varsa ağaç kesersiniz.**

**${prefix}balık-tut Eğer oltanız varsa balık tutarsınız.**

**${prefix}yazı-tura Yazı tura atarsınız şans %50 var mısın?**

**${prefix}slot, Slot oynarsınız şans düşük ama ödülü yüksek.**

**${prefix}market Satılan ürünlere ve fiyatlarını incelersiniz.**

**${prefix}günlük Günlük paranızı alırsınız.**

**${prefix}para-gönder İstediğiniz kişiye bütçenizin yettiği kadar para gönderirsiniz.**

**${prefix}satın-al İstediğiniz bir eşyayı satın alırsınız.**


`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")
.setImage("https://share.creavite.co/r1LfMGmoPkEC7KTu.gif")
msg.edit({content: "💰 Ekonomi", embeds: [ekonomi], components: [new MessageActionRow({ components: [buton5]})]})

}

if(button.customId === "anasayfa") {

msg.edit({content: ":house: Ana Sayfa", embeds: [embed], components: [new MessageActionRow({ components: [buton, buton1, buton2, buton3, buton4]})]})

}

button.deferUpdate();
})

collector.on("end", async button => {

msg.edit({content: "Button click Timeout", embeds: [embed], components: [new MessageActionRow({ components: [buton6]})]})

        })
    })
};
module.exports.conf = {
  aliases: ['help']
};
module.exports.help = {
  name: "yardım"
};