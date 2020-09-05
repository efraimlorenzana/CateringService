import { contentList } from "./content";
import { assetList } from "./asset";
import { socialMediaAccountList } from "./socialMediaAccount";

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

export default standardPages;