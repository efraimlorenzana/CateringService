export const socialMediaAccount = (id: string) => (`
socialMediaAccount(where: {id: "${id}"}, stage: PUBLISHED) {
  logo {
    mimeType
    id
    fileName
    url
    handle
  }
}`);

export const socialMediaAccountList = `
... on SocialMediaAccount {
  id
  updatedAt
}`;