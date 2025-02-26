const initialState = {
  data: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, data: action.payload };
    case "PUT_PROFILE":
      return {
        ...state,
        data: state.data.map((obj) => (obj._id === action.payload._id ? action.payload : obj)),
      };
    default:
      return state;
  }
};

export default profileReducer;
