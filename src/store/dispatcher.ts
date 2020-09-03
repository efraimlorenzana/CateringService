import { createStore } from 'redux';
import reducer from './reducer';
import { IAction } from '../layout/model/action';

const storeContext = createStore(reducer);

const unsubscribe = storeContext.subscribe(() => {
    console.log(storeContext.getState());
});

export const dispatch = (action: IAction) => {
    storeContext.dispatch(action);
    unsubscribe();

    return storeContext.getState();
}