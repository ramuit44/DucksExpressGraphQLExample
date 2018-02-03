const  PersonType = `type Person {
  id: Int # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  dob: String
  age: Int
  address: Address # the address of the person
}
type Address {
  street: String
  city: String
  state: String
  country: String
  postcode: String
  propertyNumber: String
}`;

export default PersonType;