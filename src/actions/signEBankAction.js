//import axios from 'axios';
import {
  Button,
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
export const signEBank = async (myState) => {

  let res = {};
  const url = 'http://rap.taobao.org/mockjsdata/14551/sign_ebank';
  //const request = axios.get('https://reduxblog.herokuapp.com/api/posts');
	
	
  
  try{
	let httpRequest =  JSON.stringify({
			idNo: myState.idNo,
			customName: myState.customName,
			cardNo: myState.cardNo,
			pwd: myState.pwd,
			keyType: myState.keyType,
			keyNo: myState.keyNo
       });
	   
	console.log('httpRequest=' + httpRequest);
    let response = await fetch(url, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         title: 'Hi!',
         categories: 'Computer, Friends',
         content: 'Blog post content'
       })
     });
     let res = await response.text();
     console.log('http Response=' + res);

     if (response.status >= 200 && response.status < 300) {
           //Handle success

             return{
               type: 'sign_ebank',
               payload: res
             }
       } else {
           //Handle error
           let error = res;
           throw error;
       }
    }
   catch(error) {
       this.setState({error: error});
       console.log("error " + error);
   }
  console.log(response);

}
