const mongoose = require("mongoose");
// mongoose will connect node js with mongodb database
// and it also provides some effiecient methods to apply validations
// id number,email "@" mandatory
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = connection;