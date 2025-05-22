import path from "path";
import fs from "fs/promises";

export const FileUpload = () => {
    const HandleFileUpload = (base64: string, name: string) => {
        const fileType = base64?.split(';')[0].split('/')[1];
        const fileName = CreateFileName(name, fileType);
        const filePath = path.resolve("src", "documents", fileName) // can also add this to .env

        fs.writeFile(filePath, base64.split(";base64,")[1], { encoding: "base64" });

        return fileName;

    }

    const CreateFileName = (name: string, type: string) => {
        return name + "." + type;
    }

    return { HandleFileUpload };
}