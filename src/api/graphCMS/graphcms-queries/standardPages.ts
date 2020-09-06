import { contentList, content } from "./content";
import { assetList, asset } from "./asset";
import { socialMediaAccountList, socialMediaAccount } from "./socialMediaAccount";
import { gridList, grid } from "./grid";

const standardPages = `
query {
  standardPages: standardPages(stage: PUBLISHED) {
      id
      updatedAt
      content {
        ${assetList}
        ${socialMediaAccountList}
        ${contentList}
        ${gridList}
      }
      createdAt
      css
      customClass
      customId
      id
      name
      publishedAt
      updatedAt
      url
      enableNavigation
      mainPage
    }
}`;

export const getBlockContent = (id: string) => (`
query getContent {
  ${content(id)},
  ${socialMediaAccount(id)},
  ${asset(id)},
  ${grid(id)}
}`);

export const contentQueries = [
    "content",
    "socialMediaAccount",
    "asset",
    "grid"
];

export default standardPages;