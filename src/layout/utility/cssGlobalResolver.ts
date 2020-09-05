const createGlobalStyle = (id: string, element: string) => {
    const s = document.createElement("style");
    s.setAttribute("id", id);
    s.setAttribute("type", "text/css");

    document.querySelector(element)!.appendChild(s);

    return s;
}

export const applyCSS = (styles: string, id: string, element: string) => {
    let gStyle = document.querySelector(`style#${id}`) as HTMLStyleElement;

    if(gStyle === null || gStyle === undefined) {
        gStyle = createGlobalStyle(id, element);
    }

    gStyle.appendChild(document.createTextNode(styles));
    document.querySelector(element)!.appendChild(gStyle);
}