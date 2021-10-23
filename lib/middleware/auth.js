import router from "next/router";
import extractFromCookie from "../cookie";

export const getToken = (req) =>{
    let token = ""
    let cookies
    if(req){
        const extractToken = extractFromCookie(req.headers,"accessToken")
        if(extractToken){
           token = extractToken
        }     
    }
   
    if(!req){
        if (typeof window !== "undefined") {
            cookies = cookie.parse(document.cookie || "")
        }
        token = (cookies && cookies.accessToken) || ""
    }

    return token

}

export const IsAuthenticated =  (ctx) => {
    if(ctx.req){
        const token = getToken(ctx.req)
        if(!token){
            ctx.res.writeHead(302, { Location: '/auth/login' })
            ctx.res.end()
            return
        }
    }else{
        const token = getToken(null)
        if(!token){
            router.replace("/auth/login")
            return 
        }
    }
}


export const NotAuthenticated = (ctx) => {
    if(ctx.req){
        const token = getToken(ctx.req)
        if(token){
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
            return
        }
    }else{
        const token = getToken(null)
        if(token){
            router.replace("/")
            return 
        }
    }
}