export const cookieSplitter = (cookie) => {
    if(!cookie){
        return {};
    }
    
    let cookies = {};

    cookie.split(';').forEach(function(cookie) {
        var parts = cookie.split('=');
        var name = parts[0].trim();
        var value = decodeURIComponent(parts[1].trim());
        cookies[name] = value;
    });

    return cookies;
}

