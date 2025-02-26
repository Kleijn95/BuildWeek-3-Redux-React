const initialState = {
  content: [],
};

const ExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EXPERIENCE":
      return { ...state, content: action.payload };
    case "ADD_EXPERIENCE":
      return { ...state, content: [...state.content, action.payload] };
    case "PUT_EXPERIENCE":
      return {
        ...state,
        content: state.content.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
      };
    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        // content: state.content.filter((exp) => exp._id !== action.payload),
        content: [...state.content.slice(0, action.payload), ...state.content.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};

export default ExperienceReducer;
