import {combineReducers} from 'redux'
import courses from './courses';
import auth from '../reducers/auth'
const rootReducer = combineReducers({
    //nơi khai báo các reducer con
    courses,
    auth,
})
export default rootReducer;