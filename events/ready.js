const client = require("../index");

const chalk = require('chalk');

const moment = require('moment');

const Discord = require('discord.js');

const config = require('../config.json');


 

var prefix = config.prefix;

 



client.on("ready", () => {
console.log(`Bütün Komutlar Başarıyla Yüklendi`);
    console.log('_________________________________________');
    console.log(`Kullanıcı İsmi     : ${client.user.username}`);
    console.log(`Sunucular          : ${client.guilds.cache.size.toLocaleString()} Sunucu`);
    console.log(`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`);
    /*console.log (`Komut Sayısı       : ${client.commands.size} Komut Var`); */
    console.log(`Prefix             : ${prefix}`);
    console.log(`Durum              : ${client.user.presence.status}!`);
    console.log(`Kuruluş Tarihi     : ${moment(client.user.createdAt).format(" DD MMMM YYYY dddd (hh:mm:ss)")}`);
    console.log(`Ram Kullanımı      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log('_________________________________________');
  

  let guilds = client.guilds.cache.size.toLocaleString();
  let users = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString();
  let channels = client.channels.cache.size;

var oyun = [
        "》 .yardım | Bot Aktif  《",
        "》 .botbilgi | " + client.guilds.cache.size.toLocaleString() + " sunucu " + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + " kullanıcı'ya Hizmet Vermekteyiz! 《",
        "》 BetaBOT Version 🔥0.0.2"
];


setInterval(function() {


var random = Math.floor(Math.random()*(oyun.length-1+1)+0);

client.user.setActivity(oyun[random], {"type": "COMPETING", url: "https://www.twitch.tv/elraenn"});

}, 2 * 2500);

});
