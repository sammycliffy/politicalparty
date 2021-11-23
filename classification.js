import gql from 'graphql-tag' 

export const CLASSIFICATION = gql`
  mutation createMutation($attendance: String!,
    $duration: String!,
    $contribution: String!,
    $loyalty: String!,
    $noOfPosition: String!,
  
  
  ) {
    randomMutation(testData:{
       attendance : $attendance,
       duration: $duration,
       contribution: $contribution,
       loyalty: $loyalty,
       noOfPosition : $noOfPosition

        
       
      }){
        testClass{ 
       classification
      }
      
    }
    
  
    
  }`


