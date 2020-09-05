export const getHeader = `
query getHeader {
  headers(stage: PUBLISHED) {
    css
    globalCss
    accountButtonLabel
    contactInformations {
      id
      label
      logo {
        fileName
        url
        mimeType
        handle
        id
      }
      name
      value
    }
    welcomeText
    logo {
      fileName
      handle
      id
      url
    }
    socialAccounts {
      id
      url
      logo {
        id
        mimeType
        fileName
        handle
        url
      }
    }
  }
}`;