import { v4 as uuidv4 } from "uuid";

export class BaseEntity {
    constructor(
        public name: string = "",
        public id: string = uuidv4(),
        public date: Date = new Date(),
        public isActive: number = 0,
        public deleted: number = 0
    ) { }
}