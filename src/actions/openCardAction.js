//import axios from 'axios';

export const openCard = async (state) => {

  let res = {};
  //const url = 'https://reduxblog.herokuapp.com/api/posts';
  const url = 'http://rap.taobao.org/mockjsdata/14551/opencard';


  //const request = axios.get('https://reduxblog.herokuapp.com/api/posts');

  try{
    let response = await fetch(url, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         'idNo': '123456789012345678',
         'name': '考拉',
         'cardNo':'1234444444444',
         'password':'888888',
         'confirmPassword':'888888'
       })
     });

     let res = await response.json();
     console.log(res);

     if (response.status >= 200 && response.status < 300) {
           //Handle success

             return{
               type: 'open_card',
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
