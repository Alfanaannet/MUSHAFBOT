import { Client } from "discord.js";
import Database from "st.db";
import ms from 'ms';
import 'console.image'
import synchronizeSlashCommands from './util/SyncCommands.mjs'
import commandResponse from './util/commandResponse.mjs'
const config_delete_db = new Database({path:"./datas/config.yml"})
import express from 'express';
const client = new Client({ intents: 98045 });
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


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
 client.on("error", console.log);
  // Event Interaction Create
  client.on(`interactionCreate`, async(interaction) => await commandResponse(client,interaction))
    setTimeout(async()=> {
     console.log(`ITS | MUSHAF BOT BY ALFANAAN`)
  })
 process.on('unhandledRejection', (reason, p) => {
    //console.log('\u001b[38;5;93m[antiCrash] :: Unhandled Rejection/Catch\u001b[0m');
   // console.log(reason, p);
  });

  process.on("uncaughtException", (err, origin) => {
   // console.log('\u001b[38;5;93m[antiCrash] :: Uncaught Exception/Catch\u001b[0m');
  //  console.log(err, origin);
  })

  process.on('uncaughtExceptionMonitor', (err, origin) => {
   // console.log('\u001b[38;5;93m[antiCrash] :: Uncaught Exception/Catch (MONITOR)\u001b[0m');
   // console.log(err, origin);
  });
