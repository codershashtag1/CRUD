const express = require("express");
const appRoute = express.Router();
const {checkRequestTime} = require("../middleware/checkRequestTime")

appRoute.use(checkRequestTime);

appRoute.get('/getData', (req, res) => {
    setTimeout(() => {
        res.send("Data send successfully");
    }, 500)
})

module.exports = appRoute