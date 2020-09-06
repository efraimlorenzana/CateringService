import React, { FC } from 'react';
import { IAssetBlock } from '../../../layout/model/asset';

interface IProps {
    data: IAssetBlock
}

const AssetBlock: FC<IProps> = ({ data }) => {
    return (
        <object id={data.handle} className="asset-block" data={data.url} data-name={data.fileName}data-mimetype={data.mimeType} data-size={data.size}>
        </object>
    )
}

export default AssetBlock;