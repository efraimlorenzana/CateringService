import { IHeader } from "./header";
import { IStandardPage } from "./standardPage";

export interface IStateProps {
    header?: IHeader | null,
    standardPages?: IStandardPage[]
}

export interface IDispatchProps {
    getHeader: () => void,
    getStandardPages: () => void
}