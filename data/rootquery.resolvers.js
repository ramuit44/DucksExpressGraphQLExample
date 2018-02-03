// must match the field items in RootQuery
import axios from 'axios';
import * as endpoints from './endpoints';

const rootQueryResolvers = 
  {

    person(rootObj, { id }){
      
      console.log("request :"+ `${endpoints.PERSON}/${id}`);
      return  axios
      .get(`${endpoints.PERSON}/${id}`)
      .then(response => response.data)
      .then(data => { console.log(data); return data; })
      .catch(error => {
        throw error;
      });
    }
    
  }
  // // this is the resolver for RootQuery.items
  // async items () {
  //   // would return an array of Item
  //   return await getItems()
  // }


export default rootQueryResolvers;    

