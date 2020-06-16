import {combineReducers} from 'redux';
import tweets from './tweets';
import account from './account';

export default combineReducers({tweets, account});
