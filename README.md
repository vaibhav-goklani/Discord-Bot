# Discord URL Shortener Bot

This repository contains the source code for a Discord bot that allows users to create shortened URLs directly in their Discord servers. The bot is an extension of the [URL-Shortener](https://github.com/vaibhav-goklani/URL-Shortener) built using Node.js, Express, and MongoDB, providing a seamless integration with Discord servers. Theres also an integration with Google's Generative AI for text generation to answer all user questions.

## Key Features
- **URL Shortening:** Generate short, unique identifiers for long URLs.
- **Generative AI Integration:** Google's Generative AI is used to generate text to allow engaging interactions with users beyond simple commands.
- **Discord Integration:** Allows users to interact with the bot in their Discord servers.
- **Short URL Analytics:** Provides analytics for short URLs, accessible within Discord.

## Dependencies
- **@google/generative-ai:** Google's Generative API for natural language generation.
- **discord.js:** Official Discord API library for Node.js.
- **dotenv**
- **express:** Fast, unopinionated web framework for Node.js.
- **mongoose:** MongoDB driver for Node.js, used for database operations.
- **ssid:** Library for generating short, unique IDs.

## Usage
1. Clone the repository:
   ```
   git clone https://github.com/vaibhav-goklani/Discord-Bot.git
   ```
2. Navigate to the project directory:
   ```
   cd Discord-Bot
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Configure environment variables. Create a `.env` file in the root directory and add the following variables:
    ```
    BOT_TOKEN = <your_discord_bot_token>
    
    CLIENT_ID = <your_discord_application_client_id>
    
    MONGODB_URI = <your_mongodb_connection_string>

    API_KEY = <your_google_generative_ai_api_key>
    ```
5. Start the server:
   ```
   npm start
   ```

## Note:
- Ensure you have MongoDB installed and running. Replace `your_mongodb_connection_string` with your MongoDB connection URI.
- Create a Discord bot application in the [Discord Developer Portal](https://discord.com/developers/docs/intro) and obtain a bot token. Replace `your_discord_bot_token` with the token you obtained.  

## Contributing
Contributions are welcome! If you have ideas for new features, improvements, feel free to submit a pull request.

## Author
[Vaibhav Goklani](https://github.com/vaibhav-goaklani)