import { IAssetBlock } from "./asset";
import { IContentBlock } from "./content";
import { ISocialAccount } from "./socialAccount";
import { IGrid } from "./grid";

export interface IStandardPage {
    id: string,
    updatedAt: string,
    createdAt: string,
    publishedAt: string,
    css: string,
    customClass: string[],
    customId?: string,
    name: string,
    url: string,
    enableNavigation: boolean,
    mainPage: boolean,
    content: IContentRef[],
    pageContent? : IPageContent[]
}

export interface IContentRef {
    id: string,
    updatedAt: string
}

export interface IContent {
    asset: IAssetBlock,
    content: IContentBlock,
    socialMediaAccount: ISocialAccount,
    grid: IGrid
}

export interface IPageContent {
    id: string
    type: string,
    data: any
}