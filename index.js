const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()
client.on('ready', () => {
	var moment = require('moment')
	var hr = new Date().getHours() +2
	if(hr == 25) hr = 1
	setInterval(function(){
  client.channels.get("474504727271571466").edit({name: `Godzina: ${hr}:${moment.utc(new Date()).format('mm:ss')}`})
  },1000)
  console.log(`Zalogowano jako ${client.user.username}`);
});

client.login(process.env.TOKEN);
