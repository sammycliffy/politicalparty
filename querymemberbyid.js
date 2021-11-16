import gql from 'graphql-tag'

export const QUERYBYUSERNAME = gql`
  query QUERYBYUSERNAME ($username: String!) {
    partymember(username: $username){ 
        username
        email
        sex
        position
        partyName
        partyCode
        phoneNumber
        performance
    }
  }
`