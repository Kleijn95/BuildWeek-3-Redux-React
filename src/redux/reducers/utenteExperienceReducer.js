const initialState = {
  content: [],
};

const UtenteExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UTENTE_EXPERIENCE":
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default UtenteExperienceReducer;
