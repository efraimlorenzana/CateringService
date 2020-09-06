import * as actionsType from './type';
import graphCMS from '../../api/graphCMS/agent';
import { IAction } from '../../layout/model/action';
import { ThunkDispatch } from 'redux-thunk';
import { contentQueries } from '../../api/graphCMS/graphcms-queries/standardPages';
import { isValidIContentProperty } from '../../layout/utility/components';

export const getStandardPages = () => {

    return async (dispatch: ThunkDispatch<void, void, IAction>) => {
        
        const pages = await graphCMS.standardPages();
        
        if(pages) {
            dispatch({
                type: actionsType.GET_STANDARD_PAGES,
                payload: pages
            });
        } else {
            console.log("fetching standard pages failed", pages);
        }
    }
}

export const getBlockContents = (ids: string[], pageID: string) => {
    return async (dispatch: ThunkDispatch<void, void, IAction>) => {
        interface IPageContents {
            pageRef: string,
            block: any
        }

        const pageContents: IPageContents = {
            pageRef: pageID,
            block: null
        };

        ids.forEach(async (id) => {
            const blocks = await graphCMS.getBlocks(id);

            if(blocks) {
                contentQueries.forEach(q => {

                    if(isValidIContentProperty(q, blocks)) {

                        const block = blocks[q];

                        if(block !== null) {
                            pageContents.block = {
                                id,
                                type: q,
                                data: block
                            };
    
                            dispatch({
                                type: actionsType.GET_BLOCK_CONTENTS,
                                payload: pageContents
                            });
                        }
                    }
                });
            }
        });   
    }
}

export const getGridContent = (childIds: string[], gridId: string) => {
    return async (dispatch: ThunkDispatch<void, void, IAction>) => {

        interface IPageContents {
            pageRef: string,
            block: any
        }

        const pageContents: IPageContents = {
            pageRef: gridId,
            block: null
        };

        childIds.forEach(async (id) => {
            const blocks = await graphCMS.getBlocks(id);

            if(blocks) {
                contentQueries.forEach(q => {

                    if(isValidIContentProperty(q, blocks)) {

                        const block = blocks[q];

                        if(block !== null) {
                            pageContents.block = {
                                id,
                                type: q,
                                data: block
                            };
    
                            dispatch({
                                type: actionsType.GET_GRID_CONTENTS,
                                payload: pageContents
                            });
                        }
                    }
                });
            }
        });   
    }
}