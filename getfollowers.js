const axios = require('axios');

const accessToken = 'EAAK86Hjq9mUBOZBneV7HKoNgggbw81ChsZBNgZCaQkDkbajix1NIsVpPEiDqKzqLQcSLTw4JLNtiFAk5DGcBo8VsDHKXlF70daWpKC9l6a3hifYx1h5YkZATjXaLiZCEjHRTD4pS1owAXZC0Uz7HnYnj1x7YL2K5nCJhLb1bld9SAe6ma41RuTjwngfjLmTYjIJ24jULcEIFy9rqpWdkCZCz2oY70yZAZCIrQLgZDZD'; // Replace this with your actual access token

axios.get('https://graph.facebook.com/v19.0/17841405309211844', {
  params: {
    fields: 'business_discovery.username(bluebottle){followers_count,media_count}',
    access_token: accessToken
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response.data);
  });