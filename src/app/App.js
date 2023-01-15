import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import RandomLogo from "./logo/RandomLogo";
import GitHubCards from './github_cards/GitHubCards'
import {SocialIcon} from "react-social-icons";

function App() {
  // Config
  const pages = 5;
  const emojis = 25;
  // noinspection JSValidateTypes
  return (
    <Parallax pages={pages}>
      {/* EMOJI BACKGROUND */}
      <ParallaxLayer factor={2} speed={0.1}>
        {
          // Make a few of these background emojis
          [...Array(emojis),].map((v, i) => (
            <RandomLogo key={i} left={Math.random() * 70 + 10 + '%'} height="1%" top={pages / emojis * i * 100 + '%'} />
          ))
        }
      </ParallaxLayer>
      <ParallaxLayer factor={2} speed={0.40}>
        {
          // Make a few of these background emojis
          [...Array(emojis),].map((v, i) => (
            <RandomLogo key={i} left={Math.random() * 70 + 10 + '%'} height="2%" top={pages / emojis * i * 100 + '%'} />
          ))
        }
      </ParallaxLayer>
      <ParallaxLayer factor={2} speed={0.65}>
        {
          // Make a few of these background emojis
          [...Array(emojis),].map((v, i) => (
            <RandomLogo key={i} left={Math.random() * 70 + 10 + '%'} height="3%" top={pages / emojis * i * 100 + '%'} />
          ))
        }
      </ParallaxLayer>

      {/* TITLE HEADER */}
      <ParallaxLayer speed={0.75} sticky={{start: 0, end: 0.3}} className="content">
        <h1>I like to party!!!</h1>
        <p style={{bottom: '10%'}}>(Keep scrolling down...)</p>
      </ParallaxLayer>

      {/* FIRST SLIDE: INTRO */}
      <ParallaxLayer offset={1} speed={0.75} sticky={{start: 1, end: 2}} className="content">
        <p>
          Just kidding. I love learning new technologies and using them to help improve people's lives.
        </p>

        <p>
          My favorite hobbies are <code>programming</code> and <code>hacking / pentesting</code>.
        </p>
      </ParallaxLayer>

      {/* SECOND SLIDE: PROJECTS */}
      <ParallaxLayer offset={2.5} speed={0.75} sticky={{start: 2.5, end: 3.5}} factor={1} className="content">
        <p>
          Here are some of my favorite projects I've made:
        </p>
        <GitHubCards />
      </ParallaxLayer>

      {/* THIRD SLIDE: LINKS */}
      {/*<ParallaxLayer offset={4.5} speed={0.75} sticky={{start: 4.5, end: 4.9}} factor={1} className="content">*/}
      {/*  /!*<SocialIcon url="https://github.com/Xiddoc" />*!/*/}
      {/*  <p>test</p>*/}
      {/*</ParallaxLayer>*/}
    </Parallax>
  );
}

export default App;
