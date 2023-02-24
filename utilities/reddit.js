let cache = {};

async function getMemes(subreddit, index = Math.floor(Math.random() * 25)) {
    let data;
    if (!(subreddit in cache)) {
        console.log(`\n\nRequest sent to ${subreddit}`);
        const response = await fetch(`https://reddit.com/r/${subreddit}.json`);
        data = await response.json();        
        cache[subreddit] = data;
    } else {
        data = cache[subreddit];
    }
    return data?.data?.children.map(({ data }) => ({
        title: data.title,
        url: data.url,
    }))[index] || {title: "No memes found", url: ""};
}
export default getMemes;