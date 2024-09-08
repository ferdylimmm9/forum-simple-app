import {deleteCookie, getCookie, setCookie,} from 'cookies-next'

class Token {
    static readonly KEY = 'forum-app-token'
    static getToken(){
        return getCookie(Token.KEY)
    }

    static setToken(token: string){
        const expiresIn = 1000*60*60*24
        return setCookie(Token.KEY, token, {expires: new Date(Date.now() + expiresIn)})
    }

    static removeToken(){
        return deleteCookie(Token.KEY)
    }
}


export default Token