import data from "../../skillsEformazione.json";

const initialState = JSON.parse(JSON.stringify(data));

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default educationReducer;
