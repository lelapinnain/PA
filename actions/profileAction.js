export const fetchAboutYouRequest = () => ({
  type: 'FETCH_ABOUTYOU_REQUEST',
})

export const fetchAboutYouSuccess = (data) => ({
  type: 'FETCH_ABOUTYOU_SUCCESS',
  payload: data,
})

export const fetchAboutYouFailure = (error) => ({
  type: 'FETCH_ABOUTYOU_FAILURE',
  payload: error,
})
export const fetchImageUpload = (data) => ({
  type: 'FETCH_IMAGEUPLOAD_SUCCESS',
  payload: data,
})
export const savePersonalInfo = (formData) => ({
  type: 'SAVE_PERSONAL_DATA',
  payload: formData,
})
export const saveAboutYou = (formData) => ({
  type: 'SAVE_ABOUTYOU_DATA',
  payload: formData,
})
export const saveAdditional = (formData) => ({
  type: 'SAVE_ADDITIONAL_DATA',
  payload: formData,
})

export const AboutYouSubmit = (data, token) => {
  const DataObject = [
    {
      playerId: 6504662,
      questionId: 1,
      answerText: data.question1 == null ? 'FromMobile' : data.question1,
    },
    {
      playerId: 6504662,
      questionId: 1,
      answerText: data.question2 == null ? 'N/A' : data.question2,
    },
    {
      playerId: 6504662,
      questionId: 1,
      answerText: data.question3 == null ? 'N/A' : data.question3,
    },
    {
      playerId: 6504662,
      questionId: 1,
      answerText: data.question4 == null ? 'N/A' : data.question4,
    },
    {
      playerId: 6504662,
      questionId: 1,
      answerText: data.question5 == null ? 'N/A' : data.question5,
    },
    {
      playerId: 6504662,
      questionId: 1,
      answerText: data.question6 == null ? 'N/A' : data.question6,
    },
  ]
  console.log(DataObject)

  return async (dispatch) => {
    dispatch(fetchAboutYouRequest())
    const apiUrl =
      'https://wynnapi-stg.wynntesting.com/wynndigital/v1.0/api/PrivateAccess/questionsanswers/addrange'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '88d01b47417b499d95413f4827d4abb1',
        },
        body: DataObject,
      })

      if (!response.ok) {
        console.log(response.json())
        dispatch(fetchAboutYouFailure(error.message))
      }

      const result = await response.json()

      dispatch(fetchAboutYouSuccess(result))

      return Promise.resolve()
    } catch (error) {
      dispatch(fetchAboutYouFailure(error.message))
      return Promise.resolve(error)
    }
  }
}
