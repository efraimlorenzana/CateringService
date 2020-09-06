import { IContentRef, IPageContent } from "./standardPage";

export interface IGrid {
    id: string,
    updatedAt: string,
    content: IContentRef[],
    css: string,
    customClass: string[],
    customId: string,
    enableFullWidth: boolean,
    numberOfColumn: number,
    gridContent? : IPageContent[]
}

export interface IGridDispatchProps {
    getGridContent: (ids: string[], gridID: string) => void
}