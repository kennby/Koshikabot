let handler = async (m, { conn, args, usedPrefix, command }) => {
  let isClose = { // Switch Case Like :v
      'open': 'not_announcement',
      'close': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined)
      throw `
*✳️ Escoge una opción:*
*▢ ${usedPrefix + command} close*
*▢ ${usedPrefix + command} open*
`.trim()
  await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['group', 'grupo','gpo'] 
handler.admin = true
handler.botAdmin = true

export default handler
