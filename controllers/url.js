const shortId = require('ssid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(message) {
    const url = message.content.split("create ")[1];
    const entry = await URL.findOne({ longURL: url });
    let shortID;
    if(!entry){
        shortID = shortId(8);
        await URL.create({
            shortID: shortID,
            longURL: url,
            createdBy: message.author.id,
        });
    }
    else{
        shortID = entry.shortID;
    }

    return { shortenedURL: `http://localhost:8000/${shortID}` }
}

async function handleRedirectToLongURL(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOne({ shortID });
    if(!entry) return res.status(404).json({ error: 'URL not found' });
    return res.redirect(entry.longURL);
}

async function handleDelete(message) {
    const shortURL = message.content.split("delete ")[1];
    const shortID = shortURL.substring(shortURL.lastIndexOf("/") + 1);
    const entry = await URL.findOneAndDelete({ shortID });
    if(!entry) return { message: 'URL not found' };
    return { message: 'URL deleted successfully' };
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectToLongURL,
    handleDelete,
};