

import gql from "graphql-tag";

const ARTICLES = gql`
  query Articles {
    articles {
      data {
        attributes {
          title
          content
          previewImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES;