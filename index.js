const express = require("express");
const app = express();

const port = 3000;
// 3000번 포트에서 서버를 실행

// 미들웨어 등록 및 라우팅 정의
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


app.use((req, res, next)=>{
    //미들웨어 로직
    next(); //다음 미들웨어로 넘어가도록 호출
});



//Get요청에 대한 라우팅
// 포트를 통해 들어노는 Get요청 중 "/"로 들어오는 모든 요청을 받는 콜백함수 작성하기
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Post요청에 대한 라우팅
// 포트를 통해 들어오는 Post요청 중 "/users"로 들어오는 모든 요청을 받는 콜백함수 작성하기
app.post('/users', (req, res) => {
    //새로운 사용자 추가 로직
});




app.get('/users/:userId', function (req, res) {
    let userId = req.params.userId;
    res.send(`User ID is: ${userId}`);
});