import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT ↓*
_*Pulsa/Pulse(Telkomsel):*_ 089510598381
_*Dana/Gopay:*_ 089510598381
Setelah melakukan donasi kirim bukti pembayaran ke owner,Dengan melakukan donasi,kamu telah mensupport bot ini agar on 24 jam dan fast respon
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl', 'ɢʀᴜᴘ ʙᴏᴛᴢ', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
