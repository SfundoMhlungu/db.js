
import {insert, update, delete_} from './operators.js'
import Store from "./Store.js"
import select from "./select.js"

function db(options) {
	this.store = new Store("Test db", options)
   

}



db.prototype.insert = insert
db.prototype.update = update
db.prototype.select = select
db.prototype.delete_ = delete_


export default db 







