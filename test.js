const axios = require('axios');

const accessToken = 'IGQWRPeXBlQ0VfaDZAtV1V0cmhLZA3FTNW12QjV4VWFKTld5WDdrUEU5Y3dIeG1vOGFPdXJrek54MnpZAS2Y3YjIwSEF0d2Y0QzdUZAEZAjTEl3ZAlJ5S1NpZAXhoc19hUmd4ekFJN1prdW9JY29uZADJEYTZAtT3RxVXZAEdC00Sm1SSWdSZAzRwZAwZDZD'; // Replace this with your actual access token
const user_id =  7991155330913961

axios.get('https://graph.instagram.com/me', {
  params: {
    fields: 'id,username',
    access_token: accessToken
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response.data);
  });


axios.get('https://graph.instagram.com/me/media', {
params: {
    fields: 'id,caption',
    access_token: accessToken
}
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error.response.data);
});


// const targetUsername = 'cretivox'; // Replace this with the username of the target account

// axios.get(`https://graph.instagram.com/${targetUsername}?fields=id,username&access_token=${accessToken}`)
//   .then(response => {
//     const targetUserId = response.data.id;
//     console.log(targetUserId);
//     // Now you have the ID of the target user, you can use it to fetch their media or other data
//     axios.get(`https://graph.instagram.com/${targetUserId}/media?fields=id,caption&access_token=${accessToken}`)
//       .then(mediaResponse => {
//         console.log(mediaResponse.data);
//       })
//       .catch(mediaError => {
//         console.error(mediaError.response.data);
//       });
//   })
//   .catch(error => {
//     console.error(error.response.data);
//   });