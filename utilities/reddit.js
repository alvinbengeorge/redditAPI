//fetch from https://reddit.com/r/ProgrammingHumor.json
//return the title and url of the first post
//use the fetch function

import fetch from "node-fetch";
import Math from "mathjs";

async function getAllMemes(subreddit) {
    const response = await fetch(`https://reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    const posts = data.data.children;
    let memes = [];
    for (let i =0; i < posts.length; i++) {
        memes.push({
            title : posts[i].title,
            url : posts[i].url
        })
    }
}

async function getRedditMeme(subreddit, index) {
    return await getAllMemes(subreddit)[index];
}

async function getRandomMeme(subreddit) {
    await getRedditMeme(subreddit, Math.floor(Math.random() * 25));
}


console.log(await getRedditMeme("ProgrammingHumor", 4));
export {
    getRedditMeme,
    getRandomMeme,
    getAllMemes
}