const axios = require('axios');
const cheerio = require('cheerio');

async function getAccountId(username) {
    try {
        const response = await axios.get(`https://www.instagram.com/${username}/`);
        const html = response.data;
        const $ = cheerio.load(html);
        const script = $('script[type="application/ld+json"]').html();
        const json = JSON.parse(script);
        // console.log(json);
        return json['@id'].split('/').pop(); // Extracting the account ID from the URL
    } catch (error) {
        console.error('Error fetching account ID:', error);
        return null;
    }
}

// Example usage
const username = 'cretivox';
getAccountId(username)
    .then(accountId => {
        if (accountId) {
            console.log(`The ID of ${username} is ${accountId}`);
        } else {
            console.log(`Failed to fetch ID for ${username}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });