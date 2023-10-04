const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	//res.send('Hello world');
	res.render("index.ejs");
});

app.listen(port, () => {
	console.log("[INFO] Express app is running on http://localhost:8080");
});
