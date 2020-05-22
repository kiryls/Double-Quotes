require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] });

console.log(process.env.BOT_TOKEN + '\nHello world!');
