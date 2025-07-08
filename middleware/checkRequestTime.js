const checkRequestTime = (req, res, next) => {
    try {
        const start = new Date();
        res.on('finish', () => {
            let endTime = new Date() - start;

            let methodName = req.method;
            let url = req.url;

            console.log(`${methodName} - ${url} : ${endTime}`)
        })

        next()

    } catch(err) {
        console.log(err);
    }
}

module.exports = { checkRequestTime }