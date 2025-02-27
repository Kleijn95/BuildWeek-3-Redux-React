const initialState = {
  content: [],
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return {
        ...state,
        content: [action.payload, ...state.content],
      };
    case "FETCH_POSTS":
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default createPostReducer;
