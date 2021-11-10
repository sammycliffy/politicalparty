import gql from 'graphql-tag' 

export const PARTY_MUTATION = gql`
  mutation createMutation($fullName: String!, $email: String!, $phoneNumber: String!,
  $qualification: String!, $noOfPosition: String!,
  $attendance: String!, $performance :String!, $contribution: String!, $duration: String!,
  $loyalty: String!, $partyName: String!, $partyCode: String!, $wardCode: String!
  
  
  ) {
    
      createPartymember(partyData:{
        fullName: $fullName,
        email: $email,
        phoneNumber: $phoneNumber,
        qualification: $qualification,
        noOfPosition: $noOfPosition,
        attendance: $attendance,
        performance: $performance,
        contribution: $contribution,
        duration: $duration,
        loyalty: $loyalty,
        partyName: $partyName,
        partyCode: $partyCode,
        wardCode: $wardCode,
      }){
        partyMember{ fullName,
        email,
        phoneNumber,
        qualification,
        noOfPosition,
        attendance,
        performance,
        contribution,
        duration,
        loyalty,
        partyName,
        partyCode,
        wardCode
      }
      
    }
    
  
    
  }`

 