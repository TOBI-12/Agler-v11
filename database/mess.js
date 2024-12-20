require("./global")

const mess = {
   wait: "<!> `Tunggu Lagi Proses Kak`",
   success: "<!> `Sukses Full Veri-veri good`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "<!> `Teks Nya Mana Kak?`",
       link: "<!> `Link Nya Mana Kak?`",
   },
   error: {
       fitur: "<!> `Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki`",
   },
   only: {
       group: "<!> `Fitur Ini Cuma Bisa Di Akses Di Dalam Group`",
       private: "<!> `Fitur Ini Cuma Bisa Di Akses Di Privat Chat`",
       owner: "<!> `𝐋𝐮 𝐁𝐮𝐤𝐚𝐧 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐊𝐨𝐧𝐭𝐨𝐥`",
       admin: "</> `INI CUMA BSA DIAKSES ADMIN SAYANG`",
       badmin: "<!> `*GAGAL* jadikan bot sebagai admin agar bisa menggunakan hal ini`",
       premium: "<!> `𝐊𝐡𝐮𝐬𝐮𝐬 𝐛𝐚𝐧𝐠 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐃𝐞𝐤`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})