require('dotenv').config()
const express = require('express')

const app = express()



const port = 3000

const githubData = {
    "login": "vaibhav803",
    "id": 156533388,
    "node_id": "U_kgDOCVSCjA",
    "avatar_url": "https://avatars.githubusercontent.com/u/156533388?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vaibhav803",
    "html_url": "https://github.com/vaibhav803",
    "followers_url": "https://api.github.com/users/vaibhav803/followers",
    "following_url": "https://api.github.com/users/vaibhav803/following{/other_user}",
    "gists_url": "https://api.github.com/users/vaibhav803/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vaibhav803/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vaibhav803/subscriptions",
    "organizations_url": "https://api.github.com/users/vaibhav803/orgs",
    "repos_url": "https://api.github.com/users/vaibhav803/repos",
    "events_url": "https://api.github.com/users/vaibhav803/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vaibhav803/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-01-13T16:30:23Z",
    "updated_at": "2024-01-24T11:34:49Z"
  }
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
    res.send('coderdotcom')
})

app.get('/login', (req , res) => {
    res.send('<h1>Please login at backend and code</h1>')
})

app.get('/youtube',(req ,res) =>{
    res.send("<h2>backend aur code</h2>")
})

app.get('/github' , (req, res) => {
    res.json(githubData)
}) 

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})