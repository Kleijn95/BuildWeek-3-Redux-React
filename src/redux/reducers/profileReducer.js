const initialState = {
  data: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, data: action.payload };
    case "PUT_PROFILE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
