const express = require("express");
const app = express();
const appRoute = require("./routes/getDataRoute")
const { checkRequestTime } = require("./middleware/checkRequestTime")

app.use(checkRequestTime);
// app.use('/data', appRoute)

// app.get("/data/getData", (req, res) => {
//     setTimeout(() => {
//         res.send("Data send successfully");
//     }, 500)
// })

app.get('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello World");
})

app.get('/rest', (req, res) => {
    res.send("i am the new API")
})

app.listen(3000, () => {
    console.log("Server Running");
})







