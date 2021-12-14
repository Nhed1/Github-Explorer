export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository?.name ?? "default"}</strong>
            <p>Form in React</p>
            <a href={props.repository?.link ?? "https://github.com/"}>
                Acess repository
            </a>
        </li>
    );
}