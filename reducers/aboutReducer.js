const initialState = {
  loading: true,
  data: [],
  error: null,
}

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ABOUTYOU_REQUEST':
      return { ...state, loading: true, error: false }
    case 'FETCH_ABOUTYOU_SUCCESS':
      return { ...state, loading: false, data: action.payload }
    case 'FETCH_ABOUTYOU_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default aboutReducer
