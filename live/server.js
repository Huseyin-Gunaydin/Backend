const http = require("http");
console.log("starting server...");
const server = http.createServer((request, response)=>{
    console.log("getting a request!", request.method, request.url);
});

switch (request.url){
    case "/photos":{
        const photos = [
            
        ]
    }
}
