import gql from 'graphql-tag' 

export const PARTY_MUTATION = gql`
  mutation createMutation($username: String!, $fullName: String!, $email: String!, 
    $phoneNumber: String!,$dateOfBirth: String!,$sex: String!,
    $maritalStatus: String!,$noOfPosition: String!,  $attendance: String!,$performance :String!,
    $partyName: String!, $partyCode: String!, $contribution: String!, $qualification: String!, 
    $duration: String!, $wardCode: String!, $votersPin: String!
  $position: String!,  
  
  
  ) {
      createPartymember(partyData:{
        username: $username,
        fullName: $fullName,
        email: $email,
        phoneNumber: $phoneNumber,
        dateOfBirth: $dateOfBirth,
        sex: $sex,
        maritalStatus:$maritalStatus,
        noOfPosition:$noOfPosition,
        attendance: $attendance,
        performance: $performance,
        partyName: $partyName,
        partyCode: $partyCode,
        contribution: $contribution,
        duration: $duration,
        wardCode: $wardCode,
        votersPin: $votersPin,
        position:$position,
        qualification:$qualification
      }){
        partyMember{ 
        fullName,
        email,
        phoneNumber,
        qualification,
        noOfPosition,
        attendance,
        performance,
        contribution,
        duration,
        partyName,
        partyCode,
        wardCode
      }
      
    }
    
  
    
  }`

 