export const getTokenFromCookie = (ctx) => {
    
    if(!ctx && ctx.req){
        return 
    }
    console.log("cookie from:",ctx.req?.headers.cookie)
    return ctx.req?.headers.cookie;
}

export const parseCookies =  (req) => {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export default function extractFromCookie(headers,name) {
    let data
    if(headers.cookie){
        let getHeaders = headers.cookie.toString().split(";");
        const cookieData = getHeaders.find(c => c.trim().startsWith(`${name}=`));

        if (!cookieData) {
            return;
        }
        data = cookieData.toString().split("=")[1];
        }
    return data;
}

