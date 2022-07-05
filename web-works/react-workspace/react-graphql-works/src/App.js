import { useEffect, useState } from "react";
import github from './github-token';
import query from './Query';

function App() {
  let [userName, setUserName] = useState("");
  let [login, setLogin] = useState("");
  let [repoList, setRepoList] = useState(null);

  useEffect(() => {


    fetch(github.baseURL, {
      method: 'POST',
      headers: github.headers,
      body: JSON.stringify(query)
    })
      .then((response) => response.json())
      .then((data) => {
        const { viewer } = data.data;

        setUserName(viewer.name)
        setLogin(viewer.login)
        setRepoList(viewer.repositories.nodes);
      })
      .catch((err) => {
        console.log(`Error ${err}`)
      });
  }, []);


  return (
    <div className="container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill">Repos</i></h1>
      <p>Looking Repo of {login} with userName : {userName} </p>

      {repoList && (
        <ul className="list-group list-group-flush">
          {
            repoList.map((repo) =>
            (<li className="list-group-item" key={repo.id}>
              <a className="h5 text-decoration-none" href={repo.url}>{repo.name}</a>

              <p className="small">{repo.description}</p>
            </li>
            ))
          }
        </ul>
      )}




    </div>
  )
}


export default App;
