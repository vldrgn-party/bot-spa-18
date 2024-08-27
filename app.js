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
            await bot.sendPhoto(chatId, './img/home-2.jpg');
            await bot.sendMessage(chatId, " 🔥 Лучшие условия ждут на Dragon Money: \n\n\n<b>🔸СРЕДНИЙ RTP 97%</b> \n\n<b>🔸БЕЗЛИМИТНЫЕ и БЫСТРЫЕ выплаты</b> \n\n<b>🔸10% КЕШБЭК</b> \n\n<b>🔸РОЗЫГРЫШИ И ПРОМИКИ ДЛЯ ИГРОКОВ</b> \n\n\n Жми на кнопку и выигрывай прямо в Telegram👇", menu_game) 
        }
    }
    startBot()
})
