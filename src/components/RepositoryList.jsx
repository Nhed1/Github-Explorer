import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState } from "react/cjs/react.development";

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: "unform",
    description: "forms in react",
    link: "https://github.com/unform/unform"
}

export function RepositoryList(){
    const [] = useState([])

    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}