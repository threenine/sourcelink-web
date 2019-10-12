import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_LANGUAGES_QUERY = gql`
 query getLanguages {
  languages( where: { Active: true } ) {
    name
  }  
}`;
