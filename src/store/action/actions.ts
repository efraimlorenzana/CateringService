import * as actionsType from './type';
import graphCMS from '../agent';
import { IAction } from '../../layout/model/action';

export const getHeader = () => {

    const header = graphCMS.header();
    const action: IAction = {
        type: actionsType.GET_HEADER,
        payload: { header } 
    }

    return action;
}