const RootMutation = `type RootMutation {
  createPerson(
    firstName: String!
    lastName: String!
    dob: String!
  ): Person
  
}`

export default RootMutation;