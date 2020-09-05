import { IAction } from "../../layout/model/action";
import * as actionsType from '../action/type';
import { IHeader } from "../../layout/model/header";

const header = (state: IHeader | null = null, action: IAction) => {
    switch(action.type) {
        case actionsType.GET_HEADER:
            return action.payload;
        default:
            return state;
    }
}

export default header;