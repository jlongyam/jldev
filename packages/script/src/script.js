import { env, type, test } from './core/index.js'

// const result = [
//   env,
//   type(false),
//   test({
//     name: 'should 0',
//     call: function() {
//       return 0
//     },
//     should: 0
//   })
// ]

// console.table(result)
export default {
  env: env,
  type: type,
  test: test
}