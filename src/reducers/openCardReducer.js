
export default (state = {process:0}, action) => {
  console.log("hello");

  switch (action.type) {
    case 'open_card':
      let payload = {};
      payload.process = 1;
      return payload;
    default:
      console.log(11);
      return state;
  }
};
