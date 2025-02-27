const initialState = {
  jobs: [],
  error: null,
  loading: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOBS_SUCCESS":
      return {
        ...state,
        jobs: action.payload.slice(0, 10),
        loading: false,
      };
    case "FETCH_JOBS_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "FETCH_JOBS_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default jobReducer;
