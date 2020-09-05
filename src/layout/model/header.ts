import { IContactInformation } from "./contactInformation";
import ILogo from "./logo";
import { ISocialAccount } from "./socialAccount";

export interface IHeader {
    accountButtonLabel: string,
    contactInformations: IContactInformation[],
    welcomeText: string,
    logo: ILogo,
    socialAccounts: ISocialAccount[],
    css: string,
    globalCss: string
}

export interface INavigation {
    page: string,
    url: string,
    isMain: boolean,
    isNav: boolean
}