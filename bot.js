const Discord = require("discord.js");

const PREFIX = "p!";

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Noob"
];

bot.on("ready", function() {
  console.log("Ready");
  bot.user.setGame("Use p!help");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendMessage("pong");
      break;
    case "info":
      message.channel.sendMessage("Olen PerunaCraftin Discord botti.");
      break;
    case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else message.channel.sendMessage("Can't read that");
      break;
    case "yp":
      var embed = new Discord.RichEmbed()
        .addField("Owners", "SadSkill\ndr_MasterFIN", true)
        .addField("CO-Owners", "MimmiTheBulldog", true)
        .addField("Admins", "Haetaan...", true)
        .addField("Moderators", "Haetaan..", true)
        .addField("Valvojat", "Poliisi5\nLupuzPvP", true)
        .addField("Rakentajat", "PLITZIZ\nBoy_Girls_PVP\nFIN_Konsta\nSkyPossu\nJANIplays", true)
        .setColor("AQUA")
      message.channel.sendEmbed(embed);
      break;
    case "help":
      var embed = new Discord.RichEmbed()
      .setTitle("My Prefix is p!")
      .addField("Commands:", "ping\ninfo\n8ball\nyp\nhelp\nperunacraft")
      .setColor("ORANGE")
      .setThumbnail(bot.user.avatarURL)
      message.member.sendEmbed(embed);
      
      message.reply("Check your DM.")
      break;
    case "perunacraft":
      message.channel.sendMessage("**PerunaCraftin ip on: PerunaCraft.net9.fi**");
      break;
    default:
      message.channel.sendMessage("Invalid Command");
  }
});

bot.login(procress.env.BOT_TOKEN);
