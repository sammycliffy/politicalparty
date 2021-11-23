import gql from 'graphql-tag'
export const QUERYBYUSERNAME = gql`
  query QUERYBYUSERNAME ($username: String!) {
    partymember(username: $username){ 
      username,
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      sex,
      votersPin,
      maritalStatus,
      qualification,
      noOfPosition,
      attendance,
      performance,
      contribution,
      duration,
      partyName,
      partyCode,
      wardCode
      position
    }
  }
`