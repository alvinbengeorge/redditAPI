async function getMemes(subreddit, index = Math.floor(Math.random() * 25)) {
    const response = await fetch(`https://reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    return data?.data?.children.map(({ data }) => ({
        title: data.title,
        url: data.url,
    }))[index] || {title: "No memes found", url: ""};
}
export default getMemes;