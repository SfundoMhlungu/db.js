import {isInDb} from "./utils.js"





export function insert(row){
            this.store.insert(row)

	 // try{
	 //   if(this.meta.options.timeStamp){
	 //      row["timeStamp"] = Date.now()
	 //   }
		 // this.store[this.meta.length] = row
		 // this.meta.length++
		   // return true
	 // }catch(err){
		  
          // return false


	// }


}



export function select(option = "*"){
        if(Number(option) !== NaN && option !== "*"){
              

             return this.store.getByid(+option)
		}     


        let filtered = [];
     let keys= []
	let beganQ = false
		   // store : this.store
	return {
		       
		       beginQuery: () => {	
				   // prepare
				     if(beganQ){
						 console.warn('please close the previous query');
						 return 
					  }
                     // keys = this.store.allKeys()
				     filtered = Object.values(this.store.getAll())
				   beganQ = true
				   console.log('opening channels')
                     
				   }, 

		        Where : (str) => {
                      if(!beganQ){
                          console.log('begin query to filter')
						  return
						}
					   console.log(str)
                        let f = this.store.search(str)   
					if(f.length > 0){
                         filtered.push(f)
					}
					},


		      endQuery: () => {
				  // end and remove stuff
			    if(!beganQ){
					console.warn('no query to close')
					return
					}
				  console.log('closing channels')
				  keys = []
				  // console.log(keys)
                   return filtered      
				}

            

	  }


}




export function delete_(){



}


export function update(){



}
