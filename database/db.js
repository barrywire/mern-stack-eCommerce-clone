const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://superWebmaster:SuperJan04.@cluster0.mqy7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
        {
            useNewUrlParser:true, 
        useUnifiedTopology: true
        }
    );
    console.log('Database connection succesfull');
    } catch (error) {
        console.log(error);
    } 
};

module.exports = connectDB