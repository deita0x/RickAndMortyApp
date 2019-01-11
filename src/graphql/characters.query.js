import gql from 'graphql-tag';

// test at https://rickandmortyapi.com/graphql/
export const CHARACTERS_LIST = gql`
  query {
    characters(page: 1) {
      results {
        id,
        name,
        image,
        status,
        species,
        gender,
        origin {
          name
        }
      }
    }
  }
`;
