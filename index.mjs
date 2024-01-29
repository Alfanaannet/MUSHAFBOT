import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import {Client,MessageEmbed} from 'discord.js';
import { createSpinner } from "nanospinner";
import Database from "st.db";
import ms from 'ms';
import 'console.image'
import synchronizeSlashCommands from './util/SyncCommands.mjs'
import commandResponse from './util/commandResponse.mjs'
import replit from "quick.replit"
const config_delete_db = new Database({path:"./datas/config.yml"})
await getStarted()
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(8080, () => {
  console.log('server started');
   startBot()
    setTimeout(async()=> {
     console.log(`\u001b[33m Mushaf Bot\u001b[0m first version\nBy \u001b[47;1m\u001b[30;1mShuruhatik#2443\u001b[0m `)
     return await startBot()
  },3500)
});
async function getStarted(){
  if(await config_delete_db.has("delete_this_value_if_you_want_delete_config") != true || await config_delete_db.get("delete_this_value_if_you_want_delete_config") == true){
  }
}


async function startBot(){
  console.clear()
  const client = new Client({intents: ['GUILDS', 'GUILD_MESSAGES']})
  client.login(process.env.token).then(()=>{
      console.log('Running the bot...');
  }).catch(()=>{
      console.log('Invalid Bot Token');
  })

  // Event Ready
  client.on("ready",async()=>{
    await synchronizeSlashCommands(client)
    console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
    client.user.setActivity("هل صليت علي النبى اليوم ؟", { type:3 });
    client.user.setStatus('idle');
    console.log("\u001b[32m▣\u001b[0m \u001b[0mBot Run By \u001b[34;1mShuruhatik#2443\u001b[0m")
    console.log("\u001b[32m▣ \u001b[0m\u001b[0m\u001b[40;1m\u001b[34;1mhttps://api.shuruhatik.com/add/"+client.user.id+"\u001b[0m")
  })

  // Event Interaction Create
  client.on(`interactionCreate`, async(interaction) => await commandResponse(client,interaction,config))
}
