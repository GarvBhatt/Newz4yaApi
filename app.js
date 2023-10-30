const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Listening to childern");
});

app.get("/news", async (req, res) => {
  try {
    const q=req.query.q;
    const pageNo=req.query.pageNo;
    let response=await axios.get(`https://newsapi.org/v2/everything?q=${q}&apiKey=fb0df5c5423b4963ae3f9f1ce1351384&page=${pageNo}&pageSize=8`);
    response=response.data.articles;
    res.send({response});
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the newz.");
  }
});

app.listen(PORT, () => {
  console.log(`Listening to childern ${PORT}`);
});