



export default class Store{
	#data = {}
	#meta = {
           length: 0,
		   
         
	}
	 construtor(name, options){
         this.#meta.name = name;
		 this.#meta.options = options


	  }
    
   get getData(){

    return this.#data
   }

	set setData(data){
		data._id = this.#meta.length
		if(this.#meta.options && this.#meta.options.timeStamp && this.#meta.options.timeStamp){
           data.timeStamp = Date.now()

		}
		this.#data[this.#meta.length] = data
		this.#meta.length++
		// console.log('data', this.#data)
	}
}

const comparers = {
  "eq": (a, b) => a === b,
   "gt": (a, b) => a > b,
	"ls": (a, b) => a < b
 

}


Store.prototype.mapSearch = function(direct, a, b){
     if(direct === "eq"){
            
           return comparers['eq'](a, b)
		 }else if(direct === "gt"){

              return comparers['gt'](a, b)

			}else if(direct === "ls"){
            return comparers['ls'](a, b)


				}else{

                         console.log('Not handled')
				}


}

Store.prototype.search = function(comm){
	 let split = comm.split(" ")
	console.log(split)
	let filtered = []
	let data = this.getData
     if(split[1] === "===" || split[1] === "=="){
            
		 this.allKeys().map((key, i)=> {
			 if(this.mapSearch('eq' ,data[key][split[0]], data[key][split[2]])){

                   filtered.push(data[key])
			 }
                   
		}) 
        
		 }
	data = {}
   return filtered
}

Store.prototype.allKeys = function(){
      // console.log(this.getData)
      return Object.keys(this.getData)

}


Store.prototype.getByid = function(id){
	const data = this.getData 
	console.log(data[id], 'vusa')
    if(data[id]){

     return data[id]
		}else{

          return "noDoc"
		}

}


Store.prototype.getAll = function(){

  return this.getData

}


Store.prototype.insert = function(data){
	this.setData   = data

       

}
