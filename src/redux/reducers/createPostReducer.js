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
    case "UPDATE_POST":
      return {
        ...state,
        content: state.content.map((post) =>
          post._id === action.payload._id ? { ...post, text: action.payload.text } : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        content: state.content.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};

export default createPostReducer;
