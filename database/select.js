





const comparers = {
  "eq": (a, b) => a === b,
   "gt": (a, b) => a > b,
	"ls": (a, b) => a < b
 

}


const mapSearch = function(direct, a, b){
      console.log(direct, a, b, "MapSearchg")

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

const search = function(comm, data){
	 let split = comm.split(" ")
	console.log(split)
	let filtered = []
	
     if(split[1] === "===" || split[1] === "=="){
            
		    data.map((obj, i)=> {
			 if(mapSearch('eq' , obj[split[0]], split[2])){

                   filtered.push(obj)
			 }
                   
		}) 
        
		 }else if(split[1] === "<"){
             data.map((obj, i)=> {
			 if(mapSearch('ls' , obj[split[0]], split[2])){

                   filtered.push(obj)
			 }
                   
		})     

			 }else if(split[1] === ">"){


                data.map((obj, i)=> {
			 if(mapSearch('gt' , obj[split[0]], split[2])){

                   filtered.push(obj)
			 }
                   
		}) 
				}

   return filtered
}



export default function select(option = "*"){
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
					let f = search(str, filtered)
					console.log(f, "f")
					if(f.length > 0){
						// filtered.push(f)
						filtered = f
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
