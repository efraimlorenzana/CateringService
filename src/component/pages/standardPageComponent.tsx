import React, { FC, useEffect } from 'react'
import { IStandardPage } from '../../layout/model/standardPage';
import { pageComponents } from '../../layout/utility/components';
import { applyCSS } from '../../layout/utility/cssGlobalResolver';
// import { applyCSS } from '../../layout/utility/cssGlobalResolver';

interface IProps {
    page: IStandardPage;
    fetchContent: (ids: string[], pageID: string) => void;
}

const StandardPageComponent: FC<IProps> = ({ page, fetchContent }) => {

    const isLoading = (page.pageContent === undefined);

    useEffect(() => {
        if(isLoading) {
            fetchContent(page.content.map(c => c.id), page.id);
        }
    }, [isLoading, fetchContent, page]);

    if(isLoading) return <div>No Content</div>

    interface IComponents {
        data: any,
        component: any
    }

    const contents: IComponents[] = [];

    page.content.forEach(pr => {
        page.pageContent!.forEach(c => {
            if(pr.id === c.id) {
                pageComponents.forEach(pc => {
                    if(c.type === pc.name) {
                        contents.push({
                            data: c.data,
                            component: pc.component
                        });
                    }
                });
            }
        });
    });

    const notFound = `[data-id="${page.id}"] ~ .not-found {
        display: none
    }`;

    return (
        <main id={`${page.customId}`} data-id={page.id}>
            {applyCSS(`${page.css ?? ""} ${notFound}`, page.id, `head`)}
            {
                contents.map((content,i) => React.createElement(content.component, {
                    key: `${i}_${content.data.id}`,
                    data: content.data,
                    pageRef: page.id
                }))
            }
            
        </main>
    )
}

export default StandardPageComponent;