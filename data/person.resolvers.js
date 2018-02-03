const personResolvers = {
  // this is the resolver for Item.owner
  // the first param represents the parent object, which in this case, would be the database results
  // that were mapped to the Item fields
  address(person){
      return person.address; 
    }
}

export default personResolvers;

