const initialState = {
  backgroundColor: "white",
};

export const colorReducer = function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_BACKGROUND":
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};
