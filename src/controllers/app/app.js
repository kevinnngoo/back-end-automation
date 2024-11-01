// the functions of this file will include:
// 1. Setting up and configuring the express server
// 2. Loading up the environment variables.
// 3. create an express application
// 4. enable json parsing
// 5. connect route files to handle URL paths
// 6. define a port and start the server


// step one: import the modules we need

const express = require('express');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes');

//step 2:  load the environment variables
dotenv.config(); 

// step 3: initialize the express app
const app = express();

// step 4: apply middleware so we can parse JSON requests

app.use(express.json());

//step 5: We conect the route files to URL paths
app.use('/api', jobRoutes);

// step 6: define the ports and start our server

const PORT = process.env.PORT || 5000; //setting the port for the server 

//begins the server and listens for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
