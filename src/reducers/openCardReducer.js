
export default (state = {process:0}, action) => {
  console.log(action.payload);
  let payload = {
    process:2, // transactionFinished
    response:action.payload
  }
  switch (action.type) {
    case 'open_card':
      return payload;
    default:
      return state;
  }
};
