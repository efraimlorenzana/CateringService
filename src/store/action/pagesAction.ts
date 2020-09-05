import * as actionsType from './type';
import graphCMS from '../../api/graphCMS/agent';
import { IAction } from '../../layout/model/action';
import { ThunkDispatch } from 'redux-thunk';

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