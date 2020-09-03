import { IHeader } from "./header";

export interface IGraphCMSResponse {
    data: IGraphCMSDefinedObject
}

export interface IGraphCMSDefinedObject {
    headers: IHeader[]
}