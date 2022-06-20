
import {insert, update, delete_, select} from './operators.js'


function db(options) {
	this.meta = {
           length: 0,
           types: {},
           options
		   

	}
	this.store = {}
   

}



db.prototype.insert = insert
db.prototype.update = update
db.prototype.select = select
db.prototype.delete_ = delete_













export default db 







