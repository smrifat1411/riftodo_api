const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://smrifat1411:4785@riftodo.ljmbmtp.mongodb.net/?retryWrites=true&w=majority";

//   with then and catch
// mongoose
//   .connect(connectString)
//   .then(() => console.log("connected to the db with then and catch"))
//   .catch((er) => console.log(er));

// const dbConnect = async () => {
//   await mongoose.connect(connectString,{

//   });

//   console.log("database connected with es6 async await");
// };

const dbConnect = (url) => {
    console.log("database is connected with returning promise");
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = dbConnect;
