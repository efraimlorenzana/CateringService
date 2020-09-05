export const content = (id: string) => (`
content(where: {id: "${id}"}, stage: PUBLISHED) {
  id
  css
  customClass
  customID
  richContent {
    html
  }
}`);

export const contentList = `
... on Content {
  id
  updatedAt
}`;