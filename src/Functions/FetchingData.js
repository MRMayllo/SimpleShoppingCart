import data from '../Public/MOCK_DATA.json'

export function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(data){  
                resolve(data)
            }else{
                reject("Error, smt went wrong")
            }

        }, 3000)
    })
}




