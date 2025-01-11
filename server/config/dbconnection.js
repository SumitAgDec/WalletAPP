const { mongoose } = require("mongoose");

async function connectToDB(url) {
    await mongoose.connect(url)
        .then(() => console.log("MongoDB connected !"))
        .catch((err) => console.log("Error in DB ! ", err))
}

module.exports = {
    connectToDB
}