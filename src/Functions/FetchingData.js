import data2 from '../Public/product_list.json'



export function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(data2){  
                resolve(data2)
            }else{
                reject(Error)
            }

        }, 2000)
    })
}




