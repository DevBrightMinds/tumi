import { BaseEntity } from "./base/BaseEntity";


export class FileUpload extends BaseEntity {
    constructor(
        public file?: string,
        public type?: string
    ) { super(); }
};