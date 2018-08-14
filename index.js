const app = "I don't do much.";

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(r => r.json())
//   .then(json => console.log(json))
const token = 'c73a63e82d47434031de5044d56c5f3870429cfc'
fetch('https://api.github.com/user/repos',{
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
