require("./database/module")

//GLOBAL PAYMENT
global.storename = "AndraZyy"
global.dana = "0895329013688"
global.qris = "-"


// GLOBAL SETTING
global.owner = "62857979027753"
global.namabot = "🎃⃟𒆜𝐀𝐠𝐥𝐞𝐫 𝐅𝐨𝐫𝐠𝐞𝐫×⃟🎃"
global.nomorbot = "62857979027753"
global.namaCreator = "🎃⃟𒆜𝐀𝐠𝐥𝐞𝐫 𝐅𝐨𝐫𝐠𝐞𝐫×⃟🎃"
global.linkyt = ""
global.autoJoin = false
global.antilink = false
global.versisc = '3.0'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://img100.pixhost.to/images/963/544171424_sevsbotz.jpg'
global.thumb = 'https://img100.pixhost.to/images/963/544171424_sevsbotz.jpg'
global.isLink = "https://whatsapp.com/channel/0029VarnOfo1CYoPhQUMNa0D"
global.packname = "Bugs"
global.author = "🎃⃟𒆜𝐀𝐠𝐥𝐞𝐫 𝐅𝐨𝐫𝐠𝐞𝐫×⃟🎃"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})