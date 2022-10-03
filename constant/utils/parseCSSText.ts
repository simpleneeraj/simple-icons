import { ParseCssTextOptions } from "typings";

function parseCSSText(cssText: string, parse: ParseCssTextOptions) {
    if (typeof cssText === 'undefined') {
        return
    }
    let cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
    let style: any = {};
    let ruleName: any;
    let rule: string;
    [, ruleName, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [, , cssTxt];
    let toJs = (s: string) => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase());
    let properties = rule.split(";").map(o => o.split(":").map(x => x && x.trim()));
    for (let [property, value] of properties) {
        let con = parse.cssToJs ? toJs(property) : property
        style[con] = value;
    }
    return { cssText, ruleName, style };
}

export default parseCSSText