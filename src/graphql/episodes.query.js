import gql from 'graphql-tag';

// test at https://rickandmortyapi.com/graphql/
export const EPISODES_LIST = gql`
  query Episodes($seasonCode: String!) {
    episodes(filter: { episode: $seasonCode }) {
      results {
        id,
        name,
        episode,
        air_date
      }
    }
  }
`;
