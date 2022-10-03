


const toCamelCase = (str: string) => {
    let space = "";
    let arr = str.match(/[a-z]+|\d+/gi) as RegExpMatchArray;
    return arr
        .map((word, index) => {
            let lower = word.toLowerCase();
            if (index != 0) {
                lower = lower
                    .split(space)
                    .map((s, k) => (k == 0 ? s.toUpperCase() : s))
                    .join(space);
            }
            return lower;
        })
        .join(space);
};


export default toCamelCase