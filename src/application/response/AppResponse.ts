export class AppResponse {
    constructor(
        public status: boolean = false,
        public data: object,
        public message: string = "",
        public responseCode: number = 0
    ) { }
}