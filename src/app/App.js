import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import RandomLogo from "./logo/RandomLogo";
import GitHubCards from './github_cards/GitHubCards'

function App() {
  // Config
  const pages = 4;
  const emojis = 25;
  // noinspection JSValidateTypes
  return (
    <Parallax pages={pages}>
      <ParallaxLayer factor={2} speed={0.5}>
      {
        // Make a few of these background emojis
        [...Array(emojis),].map((v, i) => (
            <RandomLogo key={i} left={Math.random() * 70 + 10 + '%'} height="3%" top={pages / emojis * i * 100 + '%'} />
        ))
      }
      </ParallaxLayer>
      <ParallaxLayer speed={0.75} sticky={{start: 0, end: 0.3}} className="content">
        <h1>I like to party!!!</h1>
        <p style={{bottom: '10%'}}>(Scroll down...)</p>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.75} sticky={{start: 1, end: 1.5}} className="content">
        <p>
          Just kidding. I love learning new technologies and using them to help improve people's lives.
        </p>

        <p>
          My favorite hobbies are <code>programming</code> and <code>hacking / pentesting</code>.
        </p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.75} sticky={{start: 2, end: 3}} factor={1} className="content">
        <p>
          Here are some of my favorite projects I've made on GitHub:
        </p>
        <GitHubCards />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
