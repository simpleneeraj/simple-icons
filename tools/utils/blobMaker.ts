
const blobMaker = (content?: BlobPart[], options?: BlobPropertyBag) => {
    let blob = new Blob(content, options);
    return Promise.resolve(blob);
};

export default blobMaker