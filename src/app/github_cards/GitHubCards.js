import './GitHubCardCache';
import RepoCard from "react-repo-card";

function GitHubCards() {
  return (
    <div>
      <div style={{margin: "10px"}}>
        <RepoCard username="xiddoc" repository="ComPy" dark={true}/>
      </div>
      <div style={{margin: "10px"}}>
        <RepoCard username="xiddoc" repository="PySdarot" dark={true}/>
      </div>
      <div style={{margin: "10px"}}>
        <RepoCard username="xiddoc" repository="LearningRSA" dark={true}/>
      </div>
    </div>
  )
}

export default GitHubCards;