const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

let data = { message: "여러분 화이팅!" };

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  res.status(204);
  res.send();
});

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});

app.listen(port, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
