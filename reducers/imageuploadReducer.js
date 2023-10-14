const initialState = {
  loading: true,
  Images: [],
  error: null,
}

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGEUPLOAD_REQUEST':
      return { ...state, loading: true, error: false }
    case 'FETCH_IMAGEUPLOAD_SUCCESS':
      return { ...state, loading: false, Images: action.payload }
    case 'FETCH_IMAGEUPLOAD_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default imageUploadReducer
