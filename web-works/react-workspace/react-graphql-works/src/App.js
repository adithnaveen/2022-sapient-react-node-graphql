import { useEffect, useState } from "react";
import github from './github-token';
import query from './Query';
import RepoInfo from './RepoInfo';

function App() {
  let [userName, setUserName] = useState("");
  let [login, setLogin] = useState("");
  let [repoList, setRepoList] = useState(null);
  let [pageCount, setPageCount] = useState(40);
  let [repositoryCount, setRepositoryCount] = useState(0);
  useEffect(() => {

    const queryText = JSON.stringify(query(pageCount));

    fetch(github.baseURL, {
      method: 'POST',
      headers: github.headers,
      body: queryText
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
        const { viewer } = data.data;

        setUserName(viewer.name)
        setLogin(viewer.login)
        setRepositoryCount(data.data.search.repositoryCount);
        const repos = data.data.search.nodes;

        setRepoList(repos);
      })
      .catch((err) => {
        console.log(`Error ${err}`)
      });
  }, []);


  return (
    <div className="container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill">Repos</i></h1>
      <p>Looking Repo of <i> {login}</i> with userName : <strong>{userName}</strong> has {repositoryCount} Repositories</p>

      {repoList && (
        <ul className="list-group list-group-flush">
          {
            repoList.map((repo) => (<RepoInfo key={repo.id} repo={repo} />))
          }
        </ul>
      )}




    </div>
  )
}


export default App;
