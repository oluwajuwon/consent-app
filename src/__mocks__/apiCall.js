export const giveConsentRequest = (userFeedback) => {
  const response = { data: {...userFeedback}, status: 'success'}
  
  if(userFeedback.name !== '') {
    return Promise.resolve({
    json: () =>
      Promise.resolve(response)
    })
  }
  return Promise.reject({
    error: () =>
      Promise.reject({
        status: 'Error',
        message: 'Failed to give consent'
      })
    })
}

export const fetchMock = (url, userFeedback) => {
  if (url === '/consent') {
    return giveConsentRequest(userFeedback)
  }
}