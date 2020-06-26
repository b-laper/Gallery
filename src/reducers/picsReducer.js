export default nextPictureReducer = (state = 0, action) => {
  switch (action.type) {
    case "MOVE_LEFT":
      return state - 1;
    case "MOVE_RIGHT":
      return state + 1;
    default:
      return state;
  }
};
