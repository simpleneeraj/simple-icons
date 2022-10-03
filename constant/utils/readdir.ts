import path from "path";
import fs from "fs/promises";


const readDirectory = async (directory: string) => {
    const rootDirectory = `public/${directory}`;
    const iDirectory = path.join(process.cwd(), rootDirectory);
    const files = await fs.readdir(iDirectory);
    const filesArray = files.map((file, index) => {
        let fileName = path.basename(file, path.extname(file));
        return {
            id: index,
            name: fileName,
            iconPath: `/${directory}/${file}`,
        };
    });
    return filesArray;
};

export default readDirectory;