const app = "I don't do much.";

const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${aaf8004c82862ddcbfc22851a19fb9696d6f1840}`
  }
}).then(res => res.json()).then(json => console.log(json));
