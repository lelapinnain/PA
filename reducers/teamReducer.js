const initialState = {
  loading: true,
  team: [],
  error: null,
}

const TeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAM_REQUEST':
      return { ...state, loading: true, error: false }
    case 'FETCH_TEAM_SUCCESS':
      return { ...state, loading: false, team: action.payload }
    case 'FETCH_TEAM_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default TeamReducer
