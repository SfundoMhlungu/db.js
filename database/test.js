import db from './index.js'



let store = new db({timeStamp: true})



console.log(store)

store.insert({name: "sk", surname: "mhlungu"})
store.insert({name: "sk2", surname: "mhlungu2"})
console.log(store)

// console.log("select",store.select().canYou())


let c = store.select()
let d = store.select(1)
console.log("d", d)
c.beginQuery()
c.Where('name === Sifundo')
c.Where('surname === Mhlungu')
console.log(c.endQuery())
