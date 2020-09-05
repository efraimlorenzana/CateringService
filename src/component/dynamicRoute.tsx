import React, { Fragment, FC, FunctionComponentElement } from 'react'
import { Route } from 'react-router-dom';
import { INavigation } from '../layout/model/header';

interface IProps {
    nav: INavigation,
    element: FunctionComponentElement<any>
}

const DynamicRoute: FC<IProps> = ({ nav, element }) => {
    const urls: string[] = [];

    urls.push(nav.url);

    if(nav.isMain) urls.push("/");

    return (
        <Fragment>
            {
                React.createElement(Route, { 
                    exact: true,
                    path: urls
                }, element)
            }
        </Fragment>
    )
}

export default DynamicRoute;