const createGlobalStyle = (id: string, parent: string) => {
  const s = document.createElement("style");
  s.setAttribute("id", id);
  s.setAttribute("type", "text/css");

  const p = document.querySelector(parent);

  if (p !== null) p!.appendChild(s);

  return s;
};

export const applyCSS = (styles: string, id: string, parent: string) => {
  let gStyle = document.querySelector(`style#${id}`) as HTMLStyleElement;

  if (gStyle === null || gStyle === undefined) {
    gStyle = createGlobalStyle(id, parent);
  }
  const oldStyle = gStyle.textContent;
  gStyle.innerHTML = "";

  const formattedCSS = formatCSS(`${styles} ${oldStyle}`);
  gStyle.appendChild(document.createTextNode(formattedCSS));
  const p = document.querySelector(parent);

  if (p !== null) p!.appendChild(gStyle);
};

const formatCSS = (css: string) => {
  return Array.from(
    new Set(
      Array.from(new Set(css.split("}")))
        .map((x) => x.trim())
        .join("|")
        .split("|")
    )
  )
    .reverse()
    .map((y) => (y !== "" ? y + "\n }" : ""))
    .join("\n\n").trim();
};


export const formatBlockCSS = (css: string, pageRef: string) => {
    return Array.from(new Set(css.split('}'))).map(x => x !== "" ? `[data-id="${pageRef}"] `+x.trim()+"\n }" : "").join('\n\n');
}