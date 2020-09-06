const mongoose = require('mongoose');

const dbURI = "mongodb+srv://lib123:library@maindb.n9cz9.gcp.mongodb.net/maindb?retryWrites=true&w=majority";

let options = {
    useUnifiedTopology: true,
    useNewUrlParser : true
}

mongoose.connect(dbURI, options)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Open..!! Mongo Running');
})
