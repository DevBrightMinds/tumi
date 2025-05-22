import express, { Router, Request, Response } from "express";
import { AppResponse } from "../../application/response/AppResponse";
import { FileUpload } from "../../application/features/files/UploadFile";
import { FileUploadRepository } from "../../infrastructure/repositories/FileUploadRepository";

export const FileUploadController: Router = express.Router();

const FileUploadRepo: FileUploadRepository = new FileUploadRepository()


FileUploadController.get("/getDocument", async (req: Request, res: Response) => {
    res.send(await FileUploadRepo.get(req.body?.id));
});

FileUploadController.get("/getAllDocuments", async (_: Request, res: Response) => {
    res.send(await FileUploadRepo.getAll());
});

FileUploadController.post("/create", async (req: Request, res: Response) => {
    const { HandleFileUpload } = FileUpload();

    const response = await FileUploadRepo.create(req?.body);

    if (response?.status) {
        HandleFileUpload(req?.body?.name, req?.body?.type);
        res.send(response);
    } else {
        res.send({ status: false, message: "Could not upload the document", data: {}, responseCode: 500 } as AppResponse)
    }
});

FileUploadController.patch("/update", async (req: Request, res: Response) => {
    res.send(await FileUploadRepo.update(req?.body));
});

FileUploadController.delete("/delete", async (req: Request, res: Response) => {
    res.send(await FileUploadRepo.delete(req?.body));
});