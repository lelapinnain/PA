const initialState = {
  loading: false,
  AuthToken: [],
  error: false,
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN_REQUEST':
      return { ...state, loading: true, error: false }
    case 'FETCH_LOGIN_SUCCESS':
      return { ...state, loading: false, AuthToken: action.payload }
    case 'FETCH_LOGIN_FAILURE':
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default LoginReducer
