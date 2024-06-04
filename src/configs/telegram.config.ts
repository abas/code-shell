import dotenv from 'dotenv';
dotenv.config();

export interface ITelegramConfig {
  TELEGRAM_BOT_TOKEN: string
}

const ENV:any = process.env;

const TelegramConfig:ITelegramConfig = {
  TELEGRAM_BOT_TOKEN: ENV.TELEGRAM_BOT_TOKEN ?? 'default-token'
}

export default TelegramConfig