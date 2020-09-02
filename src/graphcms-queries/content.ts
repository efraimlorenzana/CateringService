export const content = id => (`
query Content {
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