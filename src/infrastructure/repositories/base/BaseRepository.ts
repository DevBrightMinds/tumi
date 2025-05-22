import { DBContext } from "../../data/DBContext";
import { FileUpload } from "../../../core/entities/FileUpload";
import { AppResponse } from "../../../application/response/AppResponse";
import { IBaseRepository } from "../../../core/interfaces/base/IBaseRepository";

export class BaseRepository<T> implements IBaseRepository<T> {
    _dbContext:DBContext = new DBContext();

    async getAll<T>(): Promise<AppResponse> {
        const response = await this._dbContext.DbCollection.find();
        return { status: true, responseCode: 200, data: response?.toArray, message: "" } as AppResponse;
    }

    async delete<T>(file: T): Promise<AppResponse> {
        const response = await this._dbContext.DbCollection.deleteOne(file as FileUpload);
        return { status: true, responseCode: 200, data: response, message: "" } as AppResponse;
    }

    async get<T>(id: string): Promise<AppResponse> {
        const response = await this._dbContext.DbCollection.findOne({ id: id });
        return { status: true, responseCode: 200, data: response, message: "" } as AppResponse;
    }

    async create<T>(file: T): Promise<AppResponse> {
        const response = await this._dbContext.DbCollection.insertOne(file as FileUpload);
        return { status: true, responseCode: 200, data: response, message: "" } as AppResponse;
    }

    async update<T>(file: T): Promise<AppResponse> {
        const response = await this._dbContext.DbCollection.updateOne(file as FileUpload, { $set: file as FileUpload });
        return { status: true, responseCode: 200, data: response, message: "" } as AppResponse;
    }
}