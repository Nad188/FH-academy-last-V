import {combineReducers} from 'redux'
import adminReducer from './adminReducer'
import teacherReducer from './teacherReducer'
import studentReducer from './studentReducer'
 



const rootReducer=combineReducers({
admin:adminReducer,
teacher:teacherReducer,
student:studentReducer
})

export default rootReducer





