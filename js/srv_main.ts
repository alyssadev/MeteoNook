import { Hemisphere, MonthForecast } from './model'

const args = process.argv.slice(2)
if (args.length > 0) {
	const weatherSeed = parseInt(args[0], 10)
	const hemisphere = (args[1].toUpperCase().startsWith('N') || args[2] == '0') ? Hemisphere.Northern : Hemisphere.Southern
	const year = parseInt(args[2], 10)
	const month = parseInt(args[3], 10)
	const mf = new MonthForecast(hemisphere, weatherSeed, year, month)
	console.log(JSON.stringify(mf))
} else {
}


