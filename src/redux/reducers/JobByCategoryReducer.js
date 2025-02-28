import {
  FETCH_JOBS_BY_CATEGORY_REQUEST,
  FETCH_JOBS_BY_CATEGORY_SUCCESS,
  FETCH_JOBS_BY_CATEGORY_FAILURE,
} from "../actions/profileActions";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_BY_CATEGORY_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOBS_BY_CATEGORY_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FETCH_JOBS_BY_CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default jobsByCategoryReducer;
