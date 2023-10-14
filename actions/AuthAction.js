export const fetchDataRequest = () => ({
  type: 'FETCH_LOGIN_REQUEST',
})

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_LOGIN_SUCCESS',
  payload: data,
})

export const fetchDataFailure = (error) => ({
  type: 'FETCH_LOGIN_FAILURE',
  payload: error,
})
export const LoginMethod = (data) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    const apiUrl = 'https://login.wynnresorts.com/connect/token'
    const client_id = '8fb1df62-06ab-4244-b82e-abf80bdd351b'

    const formBody = [
      `client_id=${encodeURIComponent(client_id)}`,
      `grant_type=${encodeURIComponent('password')}`,
      `username=${encodeURIComponent(data.userName)}`,
      `password=${encodeURIComponent(data.Password)}`,
    ].join('&')

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      })

      if (!response.ok) {
        console.log('error')
        dispatch(fetchDataFailure(error.message))
      }

      const result = await response.json()

      dispatch(fetchDataSuccess(result))

      return Promise.resolve()
    } catch (error) {
      dispatch(fetchDataFailure(error.message))
      return Promise.resolve(error)
    }
  }
}

// const formBody = new FormData()
// formBody.append('client_id', client_id)
// formBody.append('client_secret', client_secret)
// formBody.append('grant_type', 'client_credentials')
// formBody.append('username', 'dilishredcard')
// formBody.append('password', 'Wynn1234')
