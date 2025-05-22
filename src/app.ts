import cors from "cors";
import express, { Application } from "express";
import { EnvVariables } from "./application/utils/EnvVariables";
import { FileUploadController } from "./api/controllers/FileUploadController";

const app: Application = express();

app.use(cors());
app.use(express.json({ limit: 5 }));

app.use("/api/uploads", FileUploadController);

app.listen(EnvVariables.AppPort, () => {
    console.log("app running @ port: " + EnvVariables.AppPort);
});