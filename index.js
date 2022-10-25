const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const mongoose = require('mongoose');
const config = require("./config.json");
const prefix = config.prefix;
const token = config.token;
const mongoDB = require("./config.json");
const db = require ('quick.db');
const Discord = require('discord.js');
const msg = require('message-js');
const jimp = require('jimp');
const ms = require('parse-ms');
const moment = require("moment");
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} Komut Var!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} İsimli Komut Aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
mongoose.connect("mongodb+srv://centenario:51Devil34@cluster0.kyjcy.mongodb.net/?retryWrites=true&w=majority", {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})
mongoose.connection.on("error", err => {

  console.log("err", err)

})
mongoose.connection.on("connected", (err, res) => {

  console.log("mongoose is connected")

})

let Schema = mongoose.Schema;
let personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

var createAndSavePerson = function() {
  let person = new Person({name: 'EDOUKA EPOH WILFRID', age: 34, favoriteFoods: ['ananas', 'bananas', 'cakes']});
  person.save(function(err, data) {
    if(err){
      console.log(err)
    }else{
      console.log(data)
    }
  });  
};


if(!token){
  console.log("Bu Proje Glitch Özel Uyarlanmıştır .env Dosyasına Discord Bot Tokeninizi Yazınız!")
} else { 
client.login(token).catch(e => {
  console.log("Projeye Yazılan Token Hatalı veya Discord Botunuzun Intentleri Kapalı!")
})
}


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);




{
const dcs = require("discord.js")
client.cooldownn = new dcs.Collection();
client.configg = {
cooldown: 1 * 1000
}
const cdb = require("orio.db");
client.on("messageCreate", async (message) => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldownn.has(`${message.author.id}`) || (Date.now() - client.cooldownn.get(`${message.author.id}`) > client.configg.cooldown)) {
        let exp = cdb.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = cdb.get(`level_${message.author.id}`) || cdb.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = cdb.set(`level_${message.author.id}`,level);
            message.channel.send(`:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`);
        }
        client.cooldownn.set(`${message.author.id}`, Date.now());
    }
}
})
}

const db3 = require("quick.db");

client.on("guildMemberAdd", member => {
  const kanal = db3.get(`gckanal_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `:inbox_tray: | ${member} sunucuya katıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.on("guildMemberRemove", member => {
  const kanal = db3.get(`gckanal_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `:outbox_tray: | ${member} sunucudan ayrıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})


client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'merhaba') {
      msg.reply("**Aleyküm Selam Hoşgeldin Nabers.**");
    }
  }
});

client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.roles.add(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.cache.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.MessageEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    .setColor("RANDOM")
    kanal.send({embeds: [embed]})
  } else {
    return;
  }
})

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() == 'ii sndn' || msg.content.toLowerCase() == 'iyi senden' || msg.content.toLowerCase() == 'ii senden') {
      msg.reply("**Bende İyiyim Eyw.**");
    }
  }
});


client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() == 'geldm' || msg.content.toLowerCase() == 'gldm' || msg.content.toLowerCase() == 'geldim' || msg.content.toLowerCase() == 'ben geldim') {
      msg.reply("**Hoş Geldin**");
    }
  }
});



client.on('message', async message => {
 
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || config.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
 
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`:x: **${message.author.tag}** adlı kullanıcı artık AFK degil...`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`:x: **${kullanıcı.tag}** şu anda AFK.\n Sebep : **${sebep}**`)
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`:x: **${message.author.tag}** adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
  }
  }
);


client.on('message', async message => {
const cdb = require("croxydb") //gerekli modül
if(message.guild){
  const data1 = cdb.get("cd1."+message.guild.id)
  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
 
  if(data1){
  const blacklist = ["oç", "amk", "sikik", "göt", "sik kafa", "yarak", "ananı sikeyim", "am", "am kafa", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("**Lütfen Küfür Etme!!**")
  }
  }
  })
  }

    if(!data1 && data2){
  const blacklist = ["oç", "sikik", "göt", "sik kafa", "yarak", "am", "amk", "ananı sikeyim", "am kafa", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("**Lütfen Küfür Etme!!**")
  }
  }
  })
  }
 
}
  });

client.on("roleCreate", async (rolee) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.MessageEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! Eğer ki siz yapmadıysanız yetkili ekibinizi uyarın! eğer siz yaptıysanız rol korumayı kapatıp yeniden deneyin (Rol Koruma Sistemi)"
      )
      .setColor("BLACK");
    const sunucuSahibi = await rolee.guild.fetchOwner()
sunucuSahibi.send({ embeds: [embed] })
    return
  } else {
    return;
  }
});
//sahip karşılama
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms');
let timeout = 3600000//süresini dilediğiniz gibi kısaltabilirsiniz.
let cmf = await db.fetch(`codemarefi_${msg.author.id}`);
let ia = config.sahip
          if (msg.author.id == ia) {
    if (cmf !== null && timeout - (Date.now() - cmf) > 0) {
        let time = ms(timeout - (Date.now() - cmf));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`codemarefi_${msg.author.id}`, Date.now());
  var embed2 = new Discord.MessageEmbed()
  .setDescription(`:star: Selam **Yapımcım**!<@${msg.author.id}> \n \n :star2: **Sizi Görmek Çok Güzel** <@${msg.author.id}> <@${config.sahip2}> <@${config.sahip3}>\n > Dolu dolu yaşa hayatı, dilini keşkeler sarmasın `)
  .setColor("BLACK")
  .setImage("https://cdn.discordapp.com/attachments/1029404345214697563/1030182567678316624/rainbow-line-line.gif");
   msg.channel.send({embeds: [embed2]});
   // 5000 = 5 saniye
  }
};
          }
   else if (ia == undefined) {           
          }
          if (!ia) return;
      }
          );



