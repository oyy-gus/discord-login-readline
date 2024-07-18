**Welcome to discord-login-readline.**

## **Installation**
```
npm install discord.js
npm install discord-login-readline
```

## **Example usage**
```js
import { Client, GatewayIntentBits } from 'discord.js';
import { login } from 'discord-login-readline';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

login(client);
```

Terminal output
```
Enter your Discord bot token: 
```