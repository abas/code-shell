import telegramAPI from "node-telegram-bot-api";
import TelegramConfig from "../configs/telegram.config";
import { ExecuteShell } from "../utils/shell.utils";

const BOT = new telegramAPI(TelegramConfig.TELEGRAM_BOT_TOKEN, { 
  polling: true, 
  request: {
    agentOptions: {
      keepAlive: true,
      family: 4,
    },
    url: ''
  }
});

BOT.on("message", async function(msg) {
  const { text } = msg
  try {
    const execResult = await ExecuteShell(text as string)
    await BOT.sendMessage(msg.chat.id, execResult);
  } catch (error:any) {
    await BOT.sendMessage(msg.chat.id, error.message);
  }
});

export default BOT
