import { BaseRepository } from "./base/BaseRepository";
import { FileUpload } from "../../core/entities/FileUpload";
import { IFileUploadRepository } from "../../core/interfaces/IFileUploadRepository";

export class FileUploadRepository extends BaseRepository<FileUpload> implements IFileUploadRepository<FileUpload> { };