import * as axios from "axios";

// const instance = axios.create({
//     withCredentials:true,
//     baseURL:"",
// });

export const UserAPI = {
    getBalance(userId, hash){
        debugger
        return axios.get(`https://test-22413.herokuapp.com/get_blnc?user_id=${userId}&hash=${hash}`,{withCredentials:true});
    }
}
