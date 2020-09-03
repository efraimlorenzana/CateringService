import { IAction } from "../layout/model/action";
import { IState } from "../layout/model/state";

import * as actionsType from './action/type';

const reducer = (state: IState = { header: null }, action: IAction) => {
    switch(action.type) {
        case actionsType.GET_HEADER:
            return {...state, header: action.payload.header}
        default:
            return state;
    }
}

export default reducer;