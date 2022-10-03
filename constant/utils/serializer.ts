

// #_PARSING_STRING_TO_DOM

const parser = () => {
    if (typeof window !== "undefined") {
        const p = new DOMParser();
        return p;
    }
};

const serializer = (string: string, type: DOMParserSupportedType) => {
    let p = parser();
    // @ts-ignore
    const str = p.parseFromString(string, type);
    return Promise.resolve(str);
};


export default serializer