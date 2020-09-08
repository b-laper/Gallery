const initialState = {
  pics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PICS":
      return Object.assign({}, state, { pics: action.payload });
    default:
      return state;
  }
};
