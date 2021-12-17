import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
    name: "unform",
    description: "forms in react",
    link: "https://github.com/unform/unform"
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])

    // primeiro parametro = a funcao que vai executar
    // o segundo e quando ela ira executar
    useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

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