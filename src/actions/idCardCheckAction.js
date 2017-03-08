//import axios from 'axios';

export const idCardCheck = async (state) => {

  let res = {};
  //const url = 'https://reduxblog.herokuapp.com/api/posts';
  //const url = 'http://rap.taobao.org/mockjsdata/14551/idcheck';


  //const request = axios.get('https://reduxblog.herokuapp.com/api/posts');

  try{
    let response = await fetch(state.url, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         'idNo': state.idNo,
         'name': state.name
       })
     });

     let res = await response.json();
     console.log(res);

     if (response.status >= 200 && response.status < 300) {
           //Handle success

             return{
               type: 'idcard_check',
               payload: res
             }
       } else {
           //Handle error
           let error = res;
           throw error;
       }
    }
   catch(error) {
       //this.setState({error: error});
       console.log("error " + error);
   }
  console.log(response);

}
