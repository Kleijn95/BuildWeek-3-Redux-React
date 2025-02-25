const initialState = {
  content: [],
};

const ExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EXPERIENCE":
      return { ...state, content: action.payload };
    case "ADD_EXPERIENCE":
      return { ...state, content: [...state.content, action.payload] };
    default:
      return state;
  }
};

export default ExperienceReducer;
