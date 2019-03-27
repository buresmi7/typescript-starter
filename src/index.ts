import { doSomething } from 'src/doSomething'
import 'source-map-support/register'

console.time('App')

doSomething()

console.timeEnd('App')
