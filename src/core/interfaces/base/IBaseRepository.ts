import { AppResponse } from "../../../application/response/AppResponse";

export interface IBaseRepository<T> {
    getAll(): Promise<AppResponse>;
    get(id: string): Promise<AppResponse>;
    create<T>(entity: T): Promise<AppResponse>;
    update<T>(entity: T): Promise<AppResponse>;
    delete<T>(entity: T): Promise<AppResponse>;
}