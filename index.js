const express = require("express");
const server = express();

const postsRouter = require("./routes/router");


server.use(express.json());


server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
    res.send("API RUNNING SMOOTHLY");
})


//make the port dynamic 
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
  