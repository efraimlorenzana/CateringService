export const asset = (id: string) => (`
asset(where: {id: "${id}"}, stage: PUBLISHED) {
  fileName
  handle
  mimeType
  size
  url
}`);

export const assetList = `
... on Asset {
  id
  updatedAt
}`;