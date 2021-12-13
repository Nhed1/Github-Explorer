const repositoryName = 'unform'

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
            <li>
                <strong>{repositoryName}</strong>
                <p>Form in React</p>
                <a href="">
                    Acess repository
                </a>
            </li>
            <li>
                <strong>{repositoryName}</strong>
                <p>Form in React</p>
                <a href="">
                    Acess repository
                </a>
            </li>
            <li>
                <strong>{repositoryName}</strong>
                <p>Form in React</p>
                <a href="">
                    Acess repository
                </a>
            </li>
            </ul>
        </section>
    )
}