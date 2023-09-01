const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'bravere0129.aternos.me',
  port: '33415',
  username: 'Annihilator'
})

/* -------------------------------------------------------------------------- */
/*                        бот будет смотреть на игрока                        */
/* -------------------------------------------------------------------------- */

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)

  if (!playerEntity) return

  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick',lookAtNearestPlayer)