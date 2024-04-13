const express = require('express')
const path = require('path'); 
const fs=require('fs');
const blog=require('./routes/blog')
const shop=require('./routes/shop')

const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, 'templates')));
app.use('/blog',blog)
app.use('/shop',shop)


app.get('/', (req, res) => {
  console.log("/ get request hit")
  res.send('Hello World!')
})
 
app.get('/home', (req, res) => {
  console.log("/home get request hit")
  res.sendFile('templates/index.html', { root: __dirname })
})
// this server json object
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})
// This server the json file
app.get('/apifile', (req, res) => {
  console.log("/api get request hit");
  const filePath = path.join(__dirname, 'templates', 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})