/**server/index.js
 * Setting up the node + express server
*/
const express = require("express");

const PORT = process.env.PORT || 3001; // port num

const app = express();

//listen to server of port 3001
app.listen(PORT, () => {
	console.log(`Server listening to port ${PORT}`);
	});
