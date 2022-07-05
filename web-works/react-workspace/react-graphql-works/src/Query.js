/* const githubQuery = {
    query: `
    {
      viewer {
        login
        name
        repositories(first:20) {
          nodes{
            name
            description
            id
            url
          }
        }
      }
    }`
} */



const githubQuery = {
  query: `
  {
    viewer {
      name
      login
    }
    search(query: "user:adithnaveen sort:updated-desc", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          description
          id
          url
          viewerSubscription
        }
      }
    }
  }`
}

export default githubQuery;