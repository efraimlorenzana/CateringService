import { contentList } from "./content";
import { assetList } from "./asset";
import { socialMediaAccountList } from "./socialMediaAccount";

const standardPages = `
query {
    pages: standardPages(stage: PUBLISHED) {
      id
      stage
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
    }
}`;

export default standardPages;