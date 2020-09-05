const createGlobalStyle = () => {
    const s = document.createElement("style");
    s.setAttribute("id", "clientStyling");
    s.setAttribute("type", "text/css");

    document.querySelector("head")!.appendChild(s);

    return s;
}

export const applyCSS = (styles: string) => {
    let gStyle = document.querySelector("style#clientStyling") as HTMLStyleElement;

    if(gStyle === null || gStyle === undefined) {
        gStyle = createGlobalStyle();
    }

    gStyle.appendChild(document.createTextNode(styles));
    document.querySelector("head")!.appendChild(gStyle);
}