export const changeText = (text) => ({
  type: "CHANGE_TEXT",
  payload: text,
});

export const handleChange = (event) => ({
  type: "CHANGE_TEXT",
  payload: event.target.value,
});
