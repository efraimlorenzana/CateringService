import React, { FC } from 'react'
import { IContentBlock } from '../../../layout/model/content';
import { applyCSS, formatBlockCSS } from '../../../layout/utility/cssGlobalResolver';

interface IProps {
    data: IContentBlock,
    pageRef: string
}

const ContentBlock: FC<IProps> = ({ data, pageRef }) => {

    const customClass = data.customClass.length > 0 ? data.customClass.join(' ') : "";
   
    return (
        <div id={data.customID} className={`content-block ${customClass}`} data-id={data.id}>
            <span dangerouslySetInnerHTML={{ __html: data.richContent.html }}></span>
            {(data.css && applyCSS(formatBlockCSS(data.css, pageRef), pageRef, `head`))}
        </div>
    )
}

export default ContentBlock;