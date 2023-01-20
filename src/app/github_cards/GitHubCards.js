import GHRepoCard from "./GHRepoCard";

function GitHubCards() {
  return (
    <div>
      <div className="gh-cards">
        <GHRepoCard username="xiddoc" repo="ComPy" />
        <GHRepoCard username="xiddoc" repo="PySdarot" />
        <GHRepoCard username="xiddoc" repo="LearningRSA" />
        <GHRepoCard username="xiddoc" repo="xiddoc.github.io" />
      </div>
    </div>
  )
}

export default GitHubCards;