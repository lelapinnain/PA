const initialState = {
  personal: [],
  about: [],
  additional: [],
}
const EnrollmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PERSONAL_DATA':
      return { ...state, personal: action.payload }
    case 'SAVE_ABOUTYOU_DATA':
      return { ...state, about: action.payload }
    case 'SAVE_ADDITIONAL_DATA':
      return { ...state, additional: action.payload }
    default:
      return state
  }
}

export default EnrollmentReducer
