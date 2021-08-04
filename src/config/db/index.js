// Using Node.js `require()`
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/blog_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected DB Successfully");
  } catch(error) {
    console.log("Connected Fail");
  }
}
module.exports = { connect }; // import duowsi dang object
