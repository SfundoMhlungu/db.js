import db from './index.js'



let store = new db({timeStamp: true})



// console.log(store)

store.insert({name: "sk", surname: "mhlungu", age: 23})
store.insert({name: "np", surname: "mhlungu", age: 19})
store.insert({name: "jane", surname: "doe", age: 0})
// console.log(store)

// console.log("select",store.select().canYou())


let c = store.select()
// let d = store.select(10)
// console.log("d", d)
c.beginQuery()
// c.Where('name === sk')
// c.Where('surname === mhlungu')
c.Where('age < 23')
console.log(c.endQuery())
