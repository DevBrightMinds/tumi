import { IEntityValidation } from "../../core/interfaces/IEntityValidation";

export class EntityValidation implements IEntityValidation {
    validateString(value: string): boolean {
        return value == "" || value == undefined || value == "undefined" ? false : true;
    }
}