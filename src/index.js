#!/usr/bin/env node

const fs = require('fs');
const ora = require('ora');
const clear = require('clear');
const inquirer = require('inquirer');
require('colors');
const homedir = require('os').homedir();
clear();
console.log(`Welcome to the Discord Rich Presence CLI!\n`.red);
console.log(`Developed By Shiorii`);
const textArray = [
    "Homepage | fypmoon.org",
    "Discord | fypmoon.org/shiorii",
    "Github | fypmoon.org/github"
  ];
  
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
  
  let currentColorIndex = 0;
  
  function logWithRainbowEffect(text, delay) {
    text.split('').forEach((char, i) => {
      setTimeout(() => {
        console.log(`%c${char}`, `color: ${colors[currentColorIndex]}`);
        currentColorIndex = (currentColorIndex + 1) % colors.length;
      }, i * delay);
    });
  }
  
  textArray.forEach((line, index) => {
    setTimeout(() => {
      logWithRainbowEffect(line, 100);
    }, index * (textArray.length * 100));
});

inquirer
  .prompt([
    {
      name: 'Choice',
      type: 'list',
      choices: [
        'Start Last Rich Presence', 'Start New Rich Presence',
      ],
    },
  ]).then((ans) => {
    switch (ans.Choice) {
      case 'Start New Rich Presence':
        newPresence();
        break;
      case 'Start Last Rich Presence':
        oldPresence();
        break;
      default:
        break;
    }
  });
function oldPresence() {
  if (!fs.readdirSync(homedir).includes('.discord-presence-config.json')) return newPresence();
  clear();
  const data = fs.readFileSync(`${homedir}/.discord-presence-config.json`);
  const { choice } = JSON.parse(data);
  if (choice === 'YouTube') {
    const client = require('discord-rich-presence')('742615072614121602');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Playing Back',
        details: 'Watching YouTube Rewind on loop',
        largeImageKey: 'youtube',
        largeImageText: '*dislikes*',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'youtube',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'youtubematch',
        joinSecret: 'youtubejoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Snipping Tool') {
    const client = require('discord-rich-presence')('742617663448285345');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Selecting an Area',
        details: 'Taking Screenshots',
        largeImageKey: 'snippingtool',
        largeImageText: '*snip snip*',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'sniptool',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'sniptoolmatch',
        joinSecret: 'sniptooljoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Netflix') {
    const client = require('discord-rich-presence')('742620166176768051');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Browsing Titles',
        details: 'On Homepage',
        largeImageKey: 'netflix',
        largeImageText: '*gets popcorn*',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'netflix',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'netflixmatch',
        joinSecret: 'netflixjoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Zoom') {
    const client = require('discord-rich-presence')('756499439690186824');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Currently Muted',
        details: 'In a Meeting',
        largeImageKey: 'large',
        largeImageText: '*raises hand*',
        smallImageKey: 'small',
        smallImageText: '*teacher forcibly lowers my raised hand*',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'zoom',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'zoommatch',
        joinSecret: 'zoomjoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Fortnite') {
    const client = require('discord-rich-presence')('756503039640076351');
    client.on('connected', () => {
      client.updatePresence({
        state: '"Sweating"',
        details: 'Battle Royale - 99 Remaining',
        largeImageKey: 'fortnitegalaxy',
        largeImageText: '(no sweat)',
        smallImageKey: 'tier',
        smallImageText: 'Tier 69',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'fortnite',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'fortnitematch',
        joinSecret: 'fortnitejoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Minecraft') {
    const client = require('discord-rich-presence')('756505329684185179');
    client.on('connected', () => {
      client.updatePresence({
        state: 'I don\'t know what to mine...',
        details: 'Mining away',
        largeImageKey: 'grass',
        largeImageText: 'i need some steak.',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'minecraft',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'minecraftmatch',
        joinSecret: 'minecraftjoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Minecraft 2') {
    const client = require('discord-rich-presence')('801829332988461077');
    client.on('connected', () => {
      client.updatePresence({
        state: 'On a Realm',
        details: 'Playing in Survival Mode',
        largeImageKey: 'grass',
        largeImageText: '2x Diamond + 2x Stick = ?',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'minecraft2',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'minecraft2match',
        joinSecret: 'minecraft2join',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Internet Explorer') {
    const client = require('discord-rich-presence')('742623184427417641');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Waiting for a page to load',
        details: 'Exploring the Internet',
        largeImageKey: 'explorer',
        largeImageText: '*takes an hour to load*',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'explorer',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'explorermatch',
        joinSecret: 'explorerjoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Google Chrome') {
    const client = require('discord-rich-presence')('742621920457130054');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Trying to lower RAM usage...',
        details: 'In a New Tab',
        largeImageKey: 'chrome',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'chrome',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'chromematch',
        joinSecret: 'chromejoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  } 
  if (choice === 'Among Us') {
    const client = require('discord-rich-presence')('770375859822395453');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Trying to find the impostor...',
        details: 'In Game',
        largeImageKey: 'amongus',
        largeImageText: 'kinda sus ngl',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'amongus',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'amongusmatch',
        joinSecret: 'amongusjoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  }
  if (choice === 'Forza Horizon 4') {
    const client = require('discord-rich-presence')('770386550231007302');
    client.on('connected', () => {
      client.updatePresence({
        state: 'Driving in a 2019 BMW Z4',
        details: 'In Game',
        largeImageKey: 'forza',
        largeImageText: 'vroom vroom',
        instance: false,
        startTimestamp: new Date(),
        partyId: 'forza',
        partySize: 999,
        partyMax: 1000,
        matchSecret: 'forzamatch',
        joinSecret: 'forzajoin',
      });
      console.log('Now Displaying your Custom Rich Presence!\nEnjoy!'.magenta);
    })
  } 
}

function newPresence() {
  clear();
  console.log(`What activity would you like to choose?`);
  inquirer
  .prompt([
    {
      name: 'Choice',
      type: 'list',
      choices: [
        'YouTube', 'Netflix', 'Google Chrome', 'Internet Explorer', 'Snipping Tool', 'Zoom', 'Fortnite', 'Minecraft', 'Minecraft 2', 'Among Us', 'Forza Horizon 4',
      ],
    },
  ]).then((ans) => {
    switch (ans.Choice) {
      case 'YouTube':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'YouTube' }));
        oldPresence();
        break;
      case 'Netflix':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Netflix' }));
        oldPresence();
        break;
      case 'Google Chrome':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Google Chrome' }));
        oldPresence();
        break;
      case 'Internet Explorer':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Internet Explorer' }));
        oldPresence();
        break;
      case 'Snipping Tool':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Snipping Tool' }));
        oldPresence();
        break;
      case 'Zoom':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Zoom' }));
        oldPresence();
        break;
      case 'Fortnite':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Fortnite' }));
        oldPresence();
        break;
      case 'Minecraft':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Minecraft' }));
        oldPresence();
        break;
      case 'Minecraft 2':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Minecraft 2' }));
        oldPresence();
        break;
      case 'Among Us':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Among Us' }));
        oldPresence();
        break;
      case 'Forza Horizon 4':
        fs.writeFileSync(`${homedir}/.discord-presence-config.json`, JSON.stringify({ choice: 'Forza Horizon 4' }));
        oldPresence();
        break;
      default:
        newPresence();
        break;
    }
  });
}