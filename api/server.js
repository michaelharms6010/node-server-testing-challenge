const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const restricted = require("../auth/restricted-middleware");

const QuotesRouter = require("../quotes/quotes-router");
const AuthRouter = require("../auth/auth-router");


const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.use('/quotes', QuotesRouter)
server.use("/auth", AuthRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "we up" });
});




module.exports = server;