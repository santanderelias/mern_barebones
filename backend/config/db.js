const mongoose = require ('mongoose')

const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }
    catch (error) {
        console.log(error)
        proccess.exit(1)
    }
}

module.exports = connectDB