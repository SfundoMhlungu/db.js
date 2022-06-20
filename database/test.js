import db from './index.js'



let store = new db({timeStamp: true})



console.log(store)

store.insert({name: "sk", surname: "mhlungu"})
store.insert({name: "sk2", surname: "mhlungu2"})
console.log(store)



