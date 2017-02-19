import axios from 'axios';

export const openCard = async () => {

  let res = {};
  const url = 'https://reduxblog.herokuapp.com/api/posts';
  //const request = axios.get('https://reduxblog.herokuapp.com/api/posts');

  try{
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
       this.setState({error: error});
       console.log("error " + error);
   }
  console.log(response);

}
