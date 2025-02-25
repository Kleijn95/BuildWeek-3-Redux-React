const initialState = {
  data: [],
};

const asideReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ASIDE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default asideReducer;
