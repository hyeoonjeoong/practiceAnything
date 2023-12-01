const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//css파일 접근 가능하게
app.use("/static", express.static(__dirname + "/static"));

// app.use("/public", express.static(__dirname + "/static"));

//기본페이지 렌더 (signup.ejs)
app.get("/", function (req, res) {
  res.render("signup");
});

//폼 post 전송하면 req.body에 데이터 담긴다.
//결과 페이지 렌더하면서 값 넘겨주기.
app.post("/signupResult", function (req, res) {
  console.log(req.body.email);
  res.render("signupResult", {
    email: req.body.email,
  });
});

app.listen(PORT, function () {});
