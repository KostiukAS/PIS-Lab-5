const http = require('http');
http.createServer(function(request, response){

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (request.url === "/home" || request.url === "/")
    {
        response.write("<h2>Home</h2>");
    }
    else if (request.url === "/is-21fiot-22-045") // Мій логін в Moodle
    {
        response.write("<h2>Костюк Андрій, 2 курс, група IC-21</h2>");
    }
    else
    {
        response.write("<h2>Not found</h2>");
    }
    response.end();
}).listen(3000);
