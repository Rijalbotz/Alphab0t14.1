const fs = require('fs')
const chalk = import('chalk')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

// Website Api
global.APIs = {
	alfa: 'https://api-Betaabot.herokuapp.com',
	zeks: 'https://zeks.me',
}

// Free apikey
global.APIKeys = {
	'https://api-Betaabot.herokuapp.com': 'Betaabot',
	'https://zeks.me': 'Betaabot',
}

global.owner = ['62887435047326','918156874290']
global.packname = setting.botname
global.author = setting.ownername
global.alphaVersion = [2, 2143, 3]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
