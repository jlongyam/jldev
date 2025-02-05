import { env, type, test } from './core/index.js'

console.log(env)
console.log(type(false))
console.log(test({
	name: 'should 0',
	call: function() {
		return 0
	},
	should: 0
}))