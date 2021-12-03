require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, 'views/index.html'));
})


let responseObject = {};

app.get('/api/whoami', (req, res) => {
	responseObject['ipaddress'] = req.ip;
	responseObject['language'] = req.headers['accept-language'];
	responseObject['software'] = req.headers['user-agent'];
	return res.status(200).json(responseObject);
})


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
