import telegramAPI from "node-telegram-bot-api";
import TelegramConfig from "../configs/telegram.config";
import { ExecuteShell } from "../utils/shell.utils";
import { GrantedUsers } from "./authorization.service";
import { COMMON_MSG, ERR_MSG } from "../constants/common.const";

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
  const username = msg.from?.username
  const { text } = msg

  if (text == '/start') {
    return await BOT.sendMessage(msg.chat.id, COMMON_MSG.START);
  }

  try {
    const grantUser = await GrantedUsers(username)
    if (!grantUser) {
      return await BOT.sendMessage(msg.chat.id, ERR_MSG.UNAUTHORIZED_USER);
    } else {
      const execResult = await ExecuteShell(text as string)
      return await BOT.sendMessage(msg.chat.id, execResult);
    }
  } catch (error:any) {
    return await BOT.sendMessage(msg.chat.id, error.message);
  }
});

export default BOT
