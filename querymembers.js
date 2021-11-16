import gql from 'graphql-tag' 
export const QUERYPARTYMEMBERS = gql`
query{
    allPartymembers{
      username
      fullName
      phoneNumber
      qualification
      sex
      maritalStatus
      noOfPosition
      attendance
      performance
      partyName
      partyCode
      contribution
      duration
      wardCode
      votersPin
      position
      
    }
  }
`;

 

 