# Discord URL Shortener Bot

This repository contains the source code for a Discord bot that allows users to create shortened URLs directly in their Discord servers. The bot is an extension of the [URL-Shortener](https://github.com/vaibhav-goklani/URL-Shortener) built using Node.js, Express, and MongoDB, providing a seamless integration with Discord servers.

## Key Features
- **URL Shortening:** Generate short, unique identifiers for long URLs.
- **Discord Integration:** Allows users to interact with the bot in their Discord servers.
- **Short URL Analytics:** Provides analytics for short URLs, accessible within Discord.

## Dependencies
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
2. Install dependencies:
   ```
   npm install
   ```
3. Configure environment variables. Create a `.env` file in the root directory and add the following variables:
    ```
    BOT_TOKEN = <your_discord_bot_token>
    
    CLIENT_ID = <your_discord_application_client_id>
    
    MONGODB_URI = <your_mongodb_connection_string>
    ```
4. Start the server:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## Author
[Vaibhav Goklani](https://github.com/vaibhav-goaklani)