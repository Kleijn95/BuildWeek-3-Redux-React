const initialState = {
  loading: false,
  jobs: [],
  error: null,
};

const jobSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_JOBS_REQUEST":
      return { ...state, loading: true };
    case "SEARCH_JOBS_SUCCESS":
      console.log("Jobs data received in reducer:", action.payload); // Aggiungi il log per debug
      return { ...state, loading: false, jobs: action.payload };
    case "SEARCH_JOBS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default jobSearchReducer;
