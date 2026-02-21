
function GHRepoCard({username, repo}) {
  return (
    <a target="_blank" rel="noreferrer" href={`https://github.com/${username}/${repo}`}>
      <img src={`https://gh-card.dev/repos/${username}/${repo}.svg`}
        alt="GitHub repository card." height="15%"/>
    </a>
  )
}

export default GHRepoCard;
