import Axios from 'axios'
const url='http://localhost:5000'
export const addUser=(data)=>{
    Axios.post(`${url}/addUser`,data).then(()=>{
        console.log(`addUser request successfull`)
    }).catch((err)=>{
        console.log(`addUser reuest failed due to ${err}`);
    })
}

export const getUsers=async()=>{
    
    let response=await Axios.get(`${url}/getUser`);
    if(!response){
        console.log(`failed to fetch users from database`);
    }
    else{
    return response.data;}
}