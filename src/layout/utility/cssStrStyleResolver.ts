interface IStyleAttribute {
    [key: string]: any
}

export const resolvedCSS = (strCSS: string) => {
    const cssArr = strCSS.split(';');
    const finalStyle: IStyleAttribute = {}
    cssArr.forEach(attr => {
        try {
            if(attr !== '' || attr !== null || attr !== undefined) {
                const kv = attr.split(':');
                const key = Capitalize(kv[0]).trim();
                finalStyle[key] = kv[1].trim();
            }
        } catch { }
    });

    return finalStyle;
}

const Capitalize = (attr: string) => {

    // String.prototype.capitalize = function() {
    //     return this.charAt(0).toUpperCase() + this.slice(1);
    // }

    if(attr.indexOf('-') >= 0) {
        const t = attr.split('-');

        for(let i = 1; i < t.length; i++) {
            let e = t[i].charAt(0);
            e = e.toUpperCase();
            e = e + t[i].slice(1);

            t[i] = e;
        }

        return t.join('');
    }

    return attr;
}