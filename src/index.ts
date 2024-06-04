import BOT from "./services/telegramBot.service";

BOT.on("message", async function(msg) {
  console.log({
    message: msg
  })
})

console.log('BOT is running...')
