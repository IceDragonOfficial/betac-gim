const Discord = require("discord.js");

exports.run = async (client, message, args) => {
        const start = Date.now();
        message.channel.send('Pong!').then(m => {
            const embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle(client.user.username + " - Pong!")
                .setThumbnail(client.user.displayAvatarURL())
                .addField(`Mesaj Gecikmesi`, `\`${Date.now() - start}ms\` 🛰️`)
                .addField(`API Gecikmesi`, `\`${Math.round(client.ws.ping)}ms\` 🛰️`)
                .setTimestamp()
                .setFooter({ text: 'BetaBOT', iconURL: message.author.avatarURL({ dynamic: true }) });
            m.edit({ embeds: [embed] });
})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};