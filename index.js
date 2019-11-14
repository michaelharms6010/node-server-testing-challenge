require("dotenv").config();
const server = require('./api/server');


const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n*** SERVER IS UP AND AT EM: CHECK OUT PORT ${port} ***\n`)
);


