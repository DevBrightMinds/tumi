import { MongoClient } from "mongodb";
import { EnvVariables } from "../../application/utils/EnvVariables";

export class DBContext {
    DbClient;
    DbConnection;
    DbCollection;

    constructor() {
        this.DbClient = new MongoClient(EnvVariables.MongoDBUrl as string);
        this.DbClient.connect();
        this.DbConnection = this.DbClient.db(EnvVariables.DbName);
        this.DbCollection = this.DbConnection.collection("documents");
    }
}