

const logger = (req, res, next ) => {
    console.log(new Date().toLocaleDateString());
    next();
}

module.exports = logger;