const axios = require('axios');

const data = new URLSearchParams();
data.append('client_id', '956540872588993');
data.append('client_secret', '8cc9a300d48eae47906f018e13189827');
data.append('grant_type', 'authorization_code');
data.append('redirect_uri', 'https://viewsosmed.cretivox.com/');
data.append('code', 'AQBzIC6jg_FoMQBvroS-tqkNpXwhAvFQQfl9OgRrsMqGlfrhQSo1fH7bpcrMs_IxDK308nE61qzewWwsyuQ_O2NLj8PmG4t7g4PzrZIIaufv2wODHBED9p5e7m-N5CVs-YVHoqIjZfqh4PSycvip1rnpgXRvSZl1XavxPn5M3UZgWj2x8iZUpje9xTtG7-D5hUzJzn8jdZnwBTjlrmzgEjjndjGgTYSqaPlmvynSeKi_7w');

axios.post('https://api.instagram.com/oauth/access_token', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response.data);
  });