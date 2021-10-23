import {split} from '@apollo/client'

export default function extractFromCookie(headers,name) {
    let data
    console.log("are we here 1")
    if(headers.cookie){
        let getHeaders = headers.cookie.toString().split(";");
        const cookieData = getHeaders.find(c => c.trim().startsWith(`${name}=`));
        console.log("are we here 2")
        if (!cookieData) {
            return;
        }
        data = cookieData.toString().split("=")[1];
    }
    return data;
}

export const getToken = (req) =>{
   
    let token
    let cookies
    if(req){
        console.log("are we here 3")
        const extractToken = extractFromCookie(req.headers,"accessToken")
        if(extractToken){
           token = extractToken
        }     
    }
   
    if(!req){
        console.log("are we here 4")
        if (typeof window !== "undefined") {
            cookies = cookie.parse(document.cookie || "")
        }
        token = (cookies && cookies.accessToken) || ""
    }
    
    return token

}