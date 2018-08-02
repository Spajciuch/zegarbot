onst Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()
var config = require("./config.json")
var prefix = config.prefix
var fs = require('fs')
fs.readdir(`./commands/`,(err, files)=>{
  if(err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("Nie znaleziono komend!")
  }
  jsfile.forEach((f,i)=> {
    let props = require(`./commands/${f}`)
    console.log(`[Załadowano] ${f}`)
    client.commands.set(props.help.name, props)
  })
})


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
