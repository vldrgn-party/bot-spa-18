const TelegramBot = require('node-telegram-bot-api');

const token = '7232972640:AAEYWHqH6ceaco3B71u-BBiLvKLSNYVHM4w';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://sky-game.cfd/s1v5WY"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://sky-game.cfd/s1v5WY",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "💰 Добро пожаловать в Dragon money! 🐉 \n\n Теперь вы можете играть в любимые \n игры прямо в телеграм!", menu_game)
        }
    }
    startBot()
})