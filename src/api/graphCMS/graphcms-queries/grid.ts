import { assetList } from "./asset";
import { socialMediaAccountList } from "./socialMediaAccount";
import { contentList } from "./content";

export const grid = (id: string) => (`
grid (where: {id: "${id}"}, stage: PUBLISHED) {
  id
  updatedAt
  content {
    ${assetList}
    ${socialMediaAccountList}
    ${contentList}
    ${gridList}
  }
  css
  customClass
  customId
  enableFullWidth
  numberOfColumn
}`);

export const gridList = `
... on Grid {
  id
  updatedAt
}`;