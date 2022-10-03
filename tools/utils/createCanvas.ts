import createImage from "./createImage";


const createCanvas = async (src: string, pixelRatio: number) => {
    // creating Canvas
    const img = await createImage(src);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const canvasWidth = img.naturalWidth;
    const canvasHeight = img.naturalHeight;
    canvas.width = canvasWidth * pixelRatio;
    canvas.height = canvasHeight * pixelRatio;
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    context.fillStyle = "transparent";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return Promise.resolve(canvas)
}

export default createCanvas