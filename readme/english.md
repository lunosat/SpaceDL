# Space Downloader

# Languages

[🇺🇸 English](https://github.com/lunosat/SpaceDL/readmes/english.md)
[🇪🇸 Spanish](https://github.com/lunosat/SpaceDL/readmes/spanish.md)
[🇧🇷 Portuguese (Brazil)](https://github.com/lunosat/SpaceDL)

# Introduction

I created this project with the intention of studying various social networks and websites, analyzing how they store their content, the ease or difficulty of obtaining this information, whether anyone has done something similar, and, most importantly, trying to implement it. Initially, I am developing the complete base with support for the three main social networks: YouTube, Instagram, and TikTok.

All the code was based on documentation and posts from other users, using them only as references and without any direct copying. In all cases, I aimed to study each function, tool, or any other technology with which I was not familiar.

# The Objective

The main objective of the bot is to allow users to download videos, audios, images, and more that are publicly available on various websites, primarily social networks.

By using Inline Queries, we allow files to be sent directly to any chat without the need to access the bot to perform this action. Although this functionality exists, the main feature is the use of Inline Queries.

P.S.: Misuse and its responsibilities are entirely the user's.

# Technologies

## Libraries

For development, I mainly used Node.js (18.20.3) and the following libraries for the general functioning of the application:

- [I18n](https://www.npmjs.com/package/i18n)
- [Node.js Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)

For integration with social networks, I will initially use some public libraries, studying how they achieved their objectives. However, in the future, I plan to replace these libraries with my own code, more organized and customized.

Third-party libraries used for integration:

- [youtube-dl-exec](https://www.npmjs.com/package/youtube-dl-exec)
- [instagram-url-direct](https://www.npmjs.com/package/instagram-url-direct)
- [@tobyg74/tiktok-api-dl](https://www.npmjs.com/package/@tobyg74/tiktok-api-dl)

## Database

I chose to use MongoDB for its practicality and the free storage quota available. Later, I plan to implement a more robust system for data management.

# Configuration

## Dependencies

- Node.js ^18
- Yarn
- Nodemon (Optional/Dev)
- Git

## Environment Variables

Telegram: To get started, you need to access [BotFather](https://t.me/botfather) to create and obtain your bot's token. Remember to enable Inline Queries for your bot.

Database: You can use MongoDB Atlas or host your own database, according to your preference.

`.env`
```js
TG_TOKEN="TELEGRAM_TOKEN"
DB_URI="DATABASE_CONNECT_URL"
```

## Initialization

Initialization is quite simple. With the dependencies and environment variables properly configured, follow these steps:

```sh
# Clone the repository

git clone https://github.com/lunosat/SpaceDL

# Access the folder

cd SpaceDL

# Install the libraries

yarn install

# Start the application

yarn start

```

# Thank You!

I really don’t know if anyone has made it this far, but if you have, I am very grateful for giving me the opportunity to present a bit of my progress in the field of my passion :)
