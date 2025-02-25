const initialState = {
  data: null,
};

const utenteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UTENTE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default utenteReducer;
