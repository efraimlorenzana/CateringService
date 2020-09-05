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
    content: IContentRef[]
}

export interface IContentRef {
    id: string,
    updatedAt: string
}