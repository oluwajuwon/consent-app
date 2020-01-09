import {
  GET_ALL_CONSENTS_SUCCESS,
  GET_ALL_CONSENTS_FAILURE,
  GIVE_CONSENT_SUCCESS,
  GIVE_CONSENT_FAILURE,
} from '../consent/types';

import { fetchMock } from '../../../__mocks__/apiCall';


export const giveConsentSuccess = newConsent => ({
  newConsent,
  type: GIVE_CONSENT_SUCCESS,
});

export const giveConsent = userFeedback => dispatch => {
  return fetchMock('/consent', userFeedback)
  .then(giveConsentRequest => giveConsentRequest.json())
  .then(giveConsentData => dispatch(giveConsentSuccess(giveConsentData.data)))
  .catch(error => {
    console.log(error);
  })
};

export const consentInitialState = {
  data: [],
  newConsent: {},
};

const consentReducer = (state = consentInitialState, action) => {

  switch (action.type) {
    case GET_ALL_CONSENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
        error: null,
      };
    case GET_ALL_CONSENTS_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
      }
    case GIVE_CONSENT_SUCCESS:
      return {
        ...state,
        data: [ ...state.data, action.newConsent ],
        newConsent: action.newConsent,
        isLoading: false,
        error: null,
      };
    case GIVE_CONSENT_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
      };
    default:
      return state;
  }
}

export default consentReducer;
