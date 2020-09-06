export interface IContentBlock {
    id: string,
    css: string,
    customClass: string[],
    customID: string,
    richContent: IRichContent
}

interface IRichContent {
    html: string
}