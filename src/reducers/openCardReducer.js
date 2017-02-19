export default (state = null, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'open_card':
      return action.payload;
    default:
      return state;
  }
};
