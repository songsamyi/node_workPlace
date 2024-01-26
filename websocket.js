const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const socketIO = require('socket.io');
const cors = require('cors'); 
const path = require('path');


//페이지를 get으로 요청을 했을때
app.get('/', function (req, res) {
    //아래와 같은 메시지를 출력    
    res.send('<h1>안녕하세요 PORT번호 8887입니다.</h1>');
});


// 웹소켓 허용하는 IP설정
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8888",
        methods: ["GET", "POST"]
    }
});


// CORS 설정을 위해 cors 미들웨어를 사용
app.use(cors());


io.on('connection', function(socket) {
    console.log('한명의 유저가 접속을 했습니다.');
});


const PORT = process.env.PORT || 8887;
server.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});