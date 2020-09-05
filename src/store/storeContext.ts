import { createStore, applyMiddleware, combineReducers } from 'redux';
import header from './reducer/headerReducer';
import standardPages from './reducer/pagesReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const reducers = combineReducers({header, standardPages});
const storeContext = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

// const unsubscribe = storeContext.subscribe(() => {
//     console.log(storeContext.getState());
// });

// export const dispatch = (action: IAction) => {
//     storeContext.dispatch(action);
//     unsubscribe();
// }

export default storeContext;