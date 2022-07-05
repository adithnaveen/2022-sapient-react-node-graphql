import { useEffect, useState } from "react";
import github from './github-token';

function App() {
  let [userName, setUserName] = useState("");
  let [login, setLogin] = useState("");
  useEffect(() => {
    const githubQuery = {
      query: `
      {
        viewer {
          login
          name
        }
      }`
    }

    fetch(github.baseURL, {
      method: 'POST',
      headers: github.headers,
      body: JSON.stringify(githubQuery)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName(data.data.viewer.name)
        setLogin(data.data.viewer.login)
      })
      .catch((err) => {
        console.log(`Error ${err}`)
      });
  }, []);


  return (
    <div className="container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill">Repos</i></h1>
      <p>Looking Repo of {login} with userName : {userName} </p>
    </div>
  )
}


export default App;
