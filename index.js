const Discord = require("discord.js");
const myid = ["832404250420051998"];
const prefix = ["#"];
const cmd = require("node-cmd");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.login("");
client2.login("");
client3.login("");
client4.login("");
client5.login("");
client6.login("");

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on("message", message => {
  if (message.content === prefix + "d1") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c1") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p1") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r1") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s1")) {
    var text = message.content
      .split("ninja up")
      .slice(1)
      .join("ninja up");
    message.channel.send(text);
  }
