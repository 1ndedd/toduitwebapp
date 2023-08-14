/**server/index.js
 * Setting up the node + express server
*/
const express = require("express");

const PORT = process.env.PORT || 3001; // port num

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = require("./models");	//fetch tables

//Routers
const taskRoute = require("./routes/Task");	//get task route
app.use("/Task", taskRoute); //parse

//listen to server of port 3001
//check if tables exist
db.sequelize.sync().then( () => {
	app.listen(PORT, () => {
		console.log(`Server listening to port ${PORT}`);
		});
});

