import { IAction } from "../../layout/model/action";
import * as actionsType from '../action/type';
import { IStandardPage } from "../../layout/model/standardPage";

const standardPages = (state: IStandardPage[] = [], action: IAction) => {
    switch(action.type) {
        case actionsType.GET_STANDARD_PAGES:
            return action.payload;
        default:
            return state;
    }
}

export default standardPages;