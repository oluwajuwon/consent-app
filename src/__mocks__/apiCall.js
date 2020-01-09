import { allConsents } from './consents';

export const giveConsentRequest = (userFeedback) => {
  const response = { data: {...userFeedback}, status: 'success'}
  
  if(userFeedback.name !== '') {
    allConsents.push(userFeedback);
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

export const getConsentRequest = () => {
  const response = { data: [...allConsents], status: 'success'}
  
  if(allConsents) {
    return Promise.resolve({
    json: () =>
      Promise.resolve(response)
    })
  }
  return Promise.reject({
    error: () =>
      Promise.reject({
        status: 'Error',
        message: 'Failed to get all consents'
      })
    })
}

export const fetchMock = (url, userFeedback) => {
  if (url === '/consent') {
    return giveConsentRequest(userFeedback)
  }
  if (url === '/consents') {
    return getConsentRequest(userFeedback)
  }
}