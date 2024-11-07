import mongoose from "mongoose";

interface IOptions {
    dbConnectionString: string
    dbName: string
}

export class MongoDatabase {

    static async connect(options: IOptions) {
        const { dbConnectionString, dbName } = options;

        try {
            await mongoose.connect(dbConnectionString, { dbName });
            console.log("Succesful Connection");
        } catch (error) {
            console.log("Internal server error\n", error);
            throw error
        }
    }

}