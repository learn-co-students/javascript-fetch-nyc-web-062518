const app = "I don't do much.";

const token = '46ab7ba42ea28c277e5bff340f646fa1e94128a8'
fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
.then(res => res.json())
.then(json => console.log(json));
