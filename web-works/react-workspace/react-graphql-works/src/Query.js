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



const githubQuery = (pageCount) => {
  return {
    query: `
    {
      viewer {
        name
        login
      }
      search(query: "user:adithnaveen sort:updated-desc", type: REPOSITORY, first: ${pageCount}) {
        repositoryCount
        nodes {
          ... on Repository {
            name
            description
            id
            url
            viewerSubscription
            licenseInfo {
              spdxId
            }
          }
        }
      }
  }`
  }
}

export default githubQuery;