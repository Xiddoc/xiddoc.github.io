
function GHRepoCard({username, repo}) {
  return (
    <a href={`https://github.com/${username}/${repo}`}>
      <img src={
        `https://github-readme-stats.vercel.app/api/pin?theme=github_dark&show_owner=true&hide_border=true`+
        `&username=${username}&repo=${repo}`}
        alt="GitHub repository card." height="15%"/>
    </a>
  )
}

export default GHRepoCard;