export const content = (id: string) => (`
query getContent {
    content(where: {id: "${id}"}, stage: PUBLISHED) {
      id
      css
      customClass
      customID
      richContent {
        html
      }
    }
}`);

export const contentList = `
... on Content {
  id
  updatedAt
}`;