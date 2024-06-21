import dotenv from 'dotenv';
dotenv.config();

export interface ITelegramConfig {
  TELEGRAM_BOT_TOKEN: string
  TELEGRAM_BOT_ADMINS: string
}

const ENV:any = process.env;

const TelegramConfig:ITelegramConfig = {
  TELEGRAM_BOT_TOKEN: ENV.TELEGRAM_BOT_TOKEN ?? 'default-token',
  TELEGRAM_BOT_ADMINS: ENV.TELEGRAM_BOT_ADMINS ?? ''
}

export default TelegramConfig