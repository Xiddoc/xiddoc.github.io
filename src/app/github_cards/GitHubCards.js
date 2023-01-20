import GHRepoCard from "./GHRepoCard";

function GitHubCards() {
  return (
    <div>
      <div style={{margin: "10px"}}>
        <GHRepoCard username="xiddoc" repo="ComPy" />
      </div>
      <div style={{margin: "10px"}}>
        <GHRepoCard username="xiddoc" repo="PySdarot" />
      </div>
      <div style={{margin: "10px"}}>
        <GHRepoCard username="xiddoc" repo="LearningRSA" />
      </div>
      <div style={{margin: "10px"}}>
        <GHRepoCard username="xiddoc" repo="xiddoc.github.io" />
      </div>
    </div>
  )
}

export default GitHubCards;