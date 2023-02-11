import express from "express";
import getMemes from "./utilities/reddit.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({"message": "Hello World"});
})

app.get("/meme/:subreddit", async function(req, res) {
    res.send(await getMemes(req.params.subreddit));
});

app.get("*", (req, res) => {
    res.send({"message": "404 Not Found"});
})

app.get("/meme/:subreddit/:index", async function(req, res) {
    res.send(await getMemes(req.params.subreddit, req.params.index));
});

app.listen("8000", () => {
  console.log("Server is running on port 8000");
})