const initialState = {
  loading: false,
  data: [],
  error: null,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMPANY_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_COMPANY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case "FETCH_COMPANY_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
