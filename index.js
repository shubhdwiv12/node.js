const http= require('http');
const url = require('url');

const server=http.createServer((req,res)=>{
  const pathName= req.url;
  if(pathName==='/overview'){
    res.end("this is the overview")
  }
  else if(pathName==='/product'){
    res.end('this is the product file');
  }
  else{
    res.writeHead(404,{
      'Content-type':'text/html'
    });
    res.end("<h1>Page not found</h1>");

  }

  
})

server.listen(8000,'127.0.0.1',()=>{
  console.log('server has been started.')
})