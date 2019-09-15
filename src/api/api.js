import  axios from "axios";

export const UserAPI = {
    getBalance(userId, hash){
        return axios.get(`https://test-22413.herokuapp.com/get_blnc?user_id=${userId}&hash=${hash}`).then(response => response.data);
    }
}

export const GameAPI = {
    getDataGame(gameId, lang){
        return axios.get(`https://test-22413.herokuapp.com/get_game_info?game_id=${gameId}&lng=${lang}`).then(response => response.data);
    }
}
