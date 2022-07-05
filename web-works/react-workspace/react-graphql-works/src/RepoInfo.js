const RepoInfo = ({ repo }) => {


    let licence;

    switch (repo.licenseInfo?.spdxId) {

        case undefined:
            licence = (<span className="px-1 py-1 ms-1 d-inline-block btn btn-sm btn-danger" style={{ fontSize: "0.6em" }}>
                NO LICENCE
            </span>);
            break;

        case "NOASSERTION":
            licence = (<span className="px-1 py-1 ms-1 d-inline-block btn btn-sm btn-warning" style={{ fontSize: "0.6em" }}>
                NO LICENCE
            </span>);
            break;

        default:
            licence = (<span className="px-1 py-1 ms-1 d-inline-block btn btn-sm btn-outline-success" style={{ fontSize: "0.6em" }}>
                NO LICENCE
            </span>);
    }


    return (<li className="list-group-item" key={repo.id}>
        <a className="h5 text-decoration-none" href={repo.url}>{repo.name}</a>
        <p className="small">{repo.description}</p>
        <div className="text-nowrap ms-3">


            {licence}



            <span className={"px-1 py-1 ms-1 d-inline-block btn btn-sm " +
                (repo.viewerSubscription === 'SUBSCRIBED' ? "btn-success" : "btn-outline-secondary")} style={{ fontSize: "0.6em" }}>
                {repo.viewerSubscription}
            </span>
        </div>


    </li>
    )
}


export default RepoInfo