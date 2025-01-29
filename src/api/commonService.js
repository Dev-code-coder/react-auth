import axios from 'axios'

const handleApi = async ($opt)=>{
    try{
        let response = await axios($opt)
        return response
    }catch(err){
        console.log(err); 
    }
}

export default handleApi;
