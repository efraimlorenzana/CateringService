import * as actionsType from './type';
import graphCMS from '../../api/graphCMS/agent';
import { IAction } from '../../layout/model/action';
import { ThunkDispatch } from 'redux-thunk';

export const getHeader = () => {

    return async (dispatch: ThunkDispatch<void, void, IAction>) => {
        
        const header = await graphCMS.header();
        
        dispatch({
            type: actionsType.GET_HEADER,
            payload: header
        });
    }
}