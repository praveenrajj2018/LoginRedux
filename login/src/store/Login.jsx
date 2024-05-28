import Login from '../middleware/LoginMiddleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from '../reducer/LoginReducer';
import { thunk } from 'redux-thunk';
const rootReducer = combineReducers({
    login: LoginReducer, // The key you've used for your course reducer
    
  });
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, Login) // Corrected middleware application
  );
  
  export default store;