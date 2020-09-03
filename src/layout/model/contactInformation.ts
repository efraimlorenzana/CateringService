import ILogo from "./logo";

export interface IContactInformation {
    id: string;
    label: string;
    logo: ILogo;
    name: string;
    value: string;
}