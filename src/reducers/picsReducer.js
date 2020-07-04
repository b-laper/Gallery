const initialState = {
  input: {},
  pics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PICS":
      return [...state.pics, action.payload];
    case "INPUT_FIELD":
      return { ...state, input: action.payload };
    default:
      return state;
  }
};
