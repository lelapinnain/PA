import { combineReducers } from 'redux'
import EnrollmentReducer from './enrollmentReducer'
import imageUploadReducer from './imageuploadReducer'
import LoginReducer from './LoginReducer'
import EventsReducer from './EventsReducer'
import TeamReducer from './teamReducer'

const rootReducer = combineReducers({
  profile: EventsReducer,
  enrollment: EnrollmentReducer,
  Login: LoginReducer,
  userImages: imageUploadReducer,
  team: TeamReducer,
})

export default rootReducer
