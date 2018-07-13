import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import searchReducer from './reducers/search';
import userReducer from './reducers/users';
import userDetailReducer from './reducers/userInfo';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    search: searchReducer,
    users: userReducer,
    userDetails: userDetailReducer
});

let composeEnhancers = compose; 
if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = ()  => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 
}
export default configureStore;