import axios from 'axios';
import * as endpoints from './endpoints';

const rootMutationResolvers = {
  createPerson: (root, args) => { 

  console.log("request :"+  args );

    return axios
      .post(endpoints.PERSON, args)
      .then(response => response.data)
      .then(data => data)
      .catch(error => {
        throw error;
      });

   }
}

export default rootMutationResolvers;