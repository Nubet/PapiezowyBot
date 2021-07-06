const { TOKEN,VOICECHANNEL,KANALDLABOTA, STATUS, LINK, VOLUME } = require("./config.json");
const discord = require("discord.js");
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();


const targetTime = 2137;

  client.on('ready', async message => 
  {
   client.user.setActivity(STATUS);
    while (true)
    {
    d = new Date();
    currtime = d.getHours() * 100 + d.getMinutes();
    console.log(currtime);
    if (currtime >= targetTime && currtime < targetTime + 1) 
    {
        const connection = await client.channels.cache.get(VOICECHANNEL).join();
        console.log('connected');
        connection.play(LINK, { volume: VOLUME }); 
        setTimeout(() => { client.channels.cache.get(VOICECHANNEL).leave(); }, 78000); 
        break;
   
    }
    else 
    {
        console.log('sleep');
        await sleep(10000);
    } 
  }
  setTimeout(() => { client.channels.cache.get(KANALDLABOTA).send('papiezowa minela'); }, 79000);

  });
     
  client.on('message', async message => 
  {
    if (message.content === "papiezowa minela" && message.author.id == "860967413365735424") 
    {

      console.log('bot znow wyczekuje 2137');
      while (true)
      {
       d = new Date();
       currtime = d.getHours() * 100 + d.getMinutes();
       console.log(currtime);
       if (currtime >= targetTime && currtime < targetTime + 1) 
       {
         const connection = await client.channels.cache.get(VOICECHANNEL).join();
         console.log('connected');
         connection.play(LINK, { volume: VOLUME });
         setTimeout(() => { client.channels.cache.get(VOICECHANNEL).leave(); }, 78000);  
         break;  
       }
       else 
       {
        console.log('sleep');
        await sleep(10000);
       } 
      }
    }
    setTimeout(() => { client.channels.cache.get(KANALDLABOTA).send('papiezowa minela'); }, 79000);

  

  });

 
 function sleep(milliseconds)
 {
     const date = Date.now();
     let currentDate = null;
     do 
     {
       currentDate = Date.now();
     } while (currentDate - date < milliseconds);
 }
     

client.login(TOKEN);
process.on('unhandledRejection', console.error);
