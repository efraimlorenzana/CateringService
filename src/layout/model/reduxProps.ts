import { IHeader } from "./header";
import { IStandardPage } from "./standardPage";

export interface IStateProps {
    header?: IHeader | null,
    standardPages?: IStandardPage[],
}

export interface IAppDispatchProps {
    getHeader: () => void,
    getStandardPages: () => void,
    getBlockContents: (ids: string[], pageID: string) => void
}