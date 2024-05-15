const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        
        await mongoose.connect(process.env.MONGODB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('Basede datos online');

    } catch (error) {
        console.log('Error al iniciar la base de dato:\n', error);
    }
}


module.exports = {
    dbConnection
}