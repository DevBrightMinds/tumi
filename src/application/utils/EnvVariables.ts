import DotEnv from "dotenv";

const EnvLocal = DotEnv.config().parsed;

export const EnvVariables = {
    DbName: EnvLocal?.DOCXAPP,
    AppPort: EnvLocal?.APP_PORT,
    MongoDBUrl: EnvLocal?.MONGO_DB_URI
}