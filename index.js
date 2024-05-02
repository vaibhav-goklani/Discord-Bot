const { Client, GatewayIntentBits } =  require('discord.js');
const express = require('express');
const dotenv = require('dotenv').config();

const connectToMongoDB = require('./connect');
const { handleGenerateNewShortURL, handleDelete } = require('./controllers/url');
const staticRoute = require('./routes/staticRouter');
const { generate } = require('./controllers/gemini');

// Connections
connectToMongoDB(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'));

const app = express();
const PORT = process.env.PORT || 8001;

// Bot Configurations
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Route Definition
app.use("/", staticRoute);

client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    else if(message.content.startsWith("create")) {
        const res = await handleGenerateNewShortURL(message);
        message.reply({
            content: res.shortenedURL,
        })
    }
    else if(message.content.startsWith("delete")) {
        const res = await handleDelete(message);
        message.reply({
            content: res.message,
        })
    }
    else {
        const res = await generate(message);
        message.reply({
            content: res.message,
        });
    }
});

client.on("interactionCreate", (interaction) => {
    if(!interaction.isCommand()) return;
    if(interaction.commandName === "ping") {
        interaction.reply({
            content: "Pong!",
        });
    }
});

client.login(process.env.BOT_TOKEN);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}. Click Here: http://127.0.0.1:${PORT}`));