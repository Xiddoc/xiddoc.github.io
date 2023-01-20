
function GHRepoCard({username, repo}) {
  return (
    <a href={`https://github.com/${username}/${repo}`}>
      <img src={
        `https://github-readme-stats.vercel.app/api/pin?`+
        `username=${username}&repo=${repo}&theme=github_dark&show_owner=true&hide_border=true`}
        alt="GitHub repository card." />
    </a>
  )
}

export default GHRepoCard;