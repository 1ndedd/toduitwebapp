//server/index.js
//
//Setting up the server

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
	console.log(`Server listening to port ${PORT}`);
	});
