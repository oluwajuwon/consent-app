import {
  GET_ALL_CONSENTS_SUCCESS,
  GET_ALL_CONSENTS_FAILURE,
  GIVE_CONSENT_SUCCESS,
  GIVE_CONSENT_FAILURE,
} from '../consent/types';




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
        newConsent: action.payload,
        isLoading: action.isLoading,
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
