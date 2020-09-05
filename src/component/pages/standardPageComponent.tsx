import React, { FC } from 'react'
import { IStandardPage } from '../../layout/model/standardPage';
import { applyCSS } from '../../layout/utility/cssGlobalResolver';

interface IProps {
    page: IStandardPage
}

const StandardPageComponent: FC<IProps> = ({ page }) => {
    return (
        <main id={page.id}>
            {/* {page.css && applyCSS(page.css, page.id, "main")} */}
            <h1>{page.name}</h1>
            <h2>{page.createdAt}</h2>
            <h3>{page.url}</h3>
        </main>
    )
}

export default StandardPageComponent;