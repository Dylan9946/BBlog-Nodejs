// Using Node.js `require()`
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://oanh:admin12345@cluster0.pxf5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("Connected DB Successfully");
  } catch (error) {
    console.log("Connected Fail");
  }
}
module.exports = { connect }; // import duowsi dang object
