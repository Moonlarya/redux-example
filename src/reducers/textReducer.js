const initialState = {
  text: "abcd",
};

export const textReducer = function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
