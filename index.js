const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/all.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/all.html'))
});

app.get('/all-first.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/all-first.html'))
});

app.get('/foreach.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/foreach.html'))
});

app.get('/unfold.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/foreach.html'))
});

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname + '/styles.css'))
})

app.get('/wild:id', (req, res) => res.send(req.params))

app.get('/chapter:id', (req, res) => {
  setTimeout(()=>{
    res.send('{"id":'+req.params.id+'}')
  },2000);
});

app.get('/story.json', (req, res) => {
  console.log('serving story.json');
  let story_json = require('./story.json');
  res.send(story_json);
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))


