const initialState = {
  content: [],
};

const HomePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, content: action.payload };

    default:
      return state;
  }
};

export default HomePostReducer;
