import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

const authAxiosInstance = axios.create({
    baseURL:"https://knowledgeshop.runasp.net/api" , 
    headers: {
           "Accept-Language" :"en"
    }


    
     

})


authAxiosInstance.interceptors.request.use((config)=>{
const token = useAuthStore((state) => state.token)
   if(token){
    config.headers.Authorization = `Bearer ${token}`
   }


})


export default authAxiosInstance;