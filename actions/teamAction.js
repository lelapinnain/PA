export const fetchTeamRequest = () => ({
  type: 'FETCH_TEAM_REQUEST',
})

export const fetchTeamSuccess = (data) => ({
  type: 'FETCH_TEAM_SUCCESS',
  payload: data,
})

export const fetchTeamFailure = (error) => ({
  type: 'FETCH_TEAM_FAILURE',
  payload: error,
})
export const fetchTeam = () => {
  return (dispatch) => {
    dispatch(fetchTeamRequest())
    fetch(
      'https://stg-wlv.wynntesting.com/svc/v1/contentservice/PrivateAccessTeam'
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchTeamSuccess(data))
      })
      .catch((error) => {
        dispatch(fetchTeamFailure(error.message))
      })
  }
}
