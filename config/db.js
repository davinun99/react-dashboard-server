const mongoose = require('mongoose');
const DB_KEY = 'mongodb+srv://challengedUser:challengedUserPassword@cluster0.kdvqj.mongodb.net/dashboard';
const conectDatabase = async()=>{
    try {
        await mongoose.connect(DB_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Database conected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
module.exports = conectDatabase;