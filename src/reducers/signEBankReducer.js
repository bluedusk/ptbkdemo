
export default (state = {process:0}, action) => {
  console.log('signEBankReduder action.payload'+action.payload);
  
 console.log('Reducer state.process=' + state.process);
  let payload = {
    process:2, // transactionFinished
    response:action.payload
  }
  
  switch (action.type) {
	case 'sign_ebank':
      return payload;
    default:
      return state;
  }
};
