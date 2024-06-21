import TelegramConfig from "../configs/telegram.config"

export async function GrantedUsers(
  username?:string
): Promise<boolean> {
  const authorized = await BotAdmins()

  if (!username) return false
  if (authorized.includes(username)) return true
  return false
}

export async function BotAdmins(): Promise<string[]> {
  const admins = TelegramConfig.TELEGRAM_BOT_ADMINS
  return admins.split(',')
}
