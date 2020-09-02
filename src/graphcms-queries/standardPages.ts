const standardPages = `
query {
    pages: standardPages(stage: PUBLISHED) {
      id
      stage
      updatedAt
      content(first: 100) {
        ... on Asset {
          id
          updatedAt
        }
        ... on SocialMediaAccount {
          id
          updatedAt
        }
        ... on Content {
          id
          updatedAt
        }
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