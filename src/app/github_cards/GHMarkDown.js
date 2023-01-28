import MarkdownPreview from '@uiw/react-markdown-preview';
import {useState} from "react";

function URITransform(uri, username, repo) {
  return `https://github.com/${username}/${repo}/blob/master/${uri}`
}

function GHMarkDown({username, repo}) {
  // Load markdown from GitHub
  const [markdown, setMarkdown] = useState('Loading...')

  // Async download README and use it for the MarkDown text
  fetch(`https://raw.githubusercontent.com/${username}/${repo}/master/README.md`).then(
    resp => {resp.text().then(
      mdText => setMarkdown(mdText)
    )}
  )

  return (
    <div data-color-mode="dark" style={{background: '#0d1117', padding: '2%', borderRadius: '5px'}}>
      <MarkdownPreview source={markdown}
                       // Link to GitHub in a new page
                       transformLinkUri={(uri) => URITransform(uri, username, repo)}
                       linkTarget={"_blank"}

                       // Don't hyperlink headers
                       rehypeRewrite={(node, index, parent) => {
                         if (node.tagName === "a" && parent && /^h([123456])/.test(parent.tagName)) {
                           parent.children = parent.children.slice(1)
                         }
                       }}
      />
    </div>
  )
}

export default GHMarkDown;