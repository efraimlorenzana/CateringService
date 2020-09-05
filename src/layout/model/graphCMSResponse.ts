import { IHeader } from "./header";
import { IStandardPage } from "./standardPage";

export interface IGraphCMSResponse {
    data: IGraphCMSDefinedObject
}

export interface IGraphCMSDefinedObject {
    headers: IHeader[],
    standardPages: IStandardPage[]
}