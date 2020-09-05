import { contentList, content } from "./content";
import { assetList, asset } from "./asset";
import { socialMediaAccountList, socialMediaAccount } from "./socialMediaAccount";

const standardPages = `
query {
  standardPages: standardPages(stage: PUBLISHED) {
      id
      updatedAt
      content {
        ${assetList}
        ${socialMediaAccountList}
        ${contentList}
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

export const getContent = (id: string) => (`
query getContent {
  ${content(id)},
  ${socialMediaAccount(id)},
  ${asset(id)}
}`);

export const contentQueries = [
    content,
    socialMediaAccount,
    asset
];

export default standardPages;