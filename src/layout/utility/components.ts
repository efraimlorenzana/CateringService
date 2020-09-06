import { IContent } from "../model/standardPage";
import ContentBlock from "../../component/blocks/contentBlock/contentBlock";
import AssetBlock from "../../component/blocks/assetBlock/assetBlock";
import SocialMediaAccountBlock from "../../component/blocks/socialMediaAccountBlock/socialMediaAccountBlock";
import GridBlock from "../../component/blocks/grid/gridBlock";

export const isValidIContentProperty = (value: string, type: IContent): value is keyof typeof type => {
    return value in type;
}

export const pageComponents = [
    { name: "content", component: ContentBlock },
    { name: "socialMediaAccount", component: SocialMediaAccountBlock },
    { name: "asset", component: AssetBlock },
    { name: "grid", component: GridBlock }
];