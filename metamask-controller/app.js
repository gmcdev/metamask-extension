const EventEmitter = require('events')

// dependencies
let main = require('./src/main')

// app version
const packageJson = require('../../package.json')


global.nodeVersion = false

class App extends EventEmitter {
	constructor(opts) {
		super()
		opts = opts || {}
		if ('nodeVersion' in opts) {
			nodeVersion = opts.nodeVersion
		}
		if (nodeVersion) {
			require('longjohn') // long error-stack trace
		}
		this.main = main
	}

	init() {
		console.log('App.init()')
		// initialize state
		this.main.init()

		.then(() => {
			//console.log('>>>', main.controller)
			this.emit('ready', this.api)
		})
		.catch((err) => {
			console.error(err)
		})		
	}

	get controller() {
		return main.controller
	}

	get api() {
		return main.controller.getApi()
	}

}
global.App = App










