let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
ga minta donasi -_-
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler