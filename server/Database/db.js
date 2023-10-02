import mongoose from "mongoose";

export const DBConnection = async(USERNAME,PASSWORD) => {
    const URL =`mongodb://${USERNAME}:${PASSWORD}@ac-sad38em-shard-00-00.aoldbcm.mongodb.net:27017,ac-sad38em-shard-00-01.aoldbcm.mongodb.net:27017,ac-sad38em-shard-00-02.aoldbcm.mongodb.net:27017/?ssl=true&replicaSet=atlas-2u58ua-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database Connected successfully');
    } catch (error) {
        console.log(error.message)
    }
}
