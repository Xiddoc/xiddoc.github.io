import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import RandomLogo from "./logo/RandomLogo";
import {SocialIcon} from "react-social-icons";
import GHRepoCard from "./github_cards/GHRepoCard";
import GHMarkDown from "./github_cards/GHMarkDown";

function App() {
  // Config
  const pages = 8;
  const emojis = 25;
  const iconStyle = {
    margin: '30px',
    width: `${window.outerWidth * 0.2}px`,
    height: `${window.outerWidth * 0.2}px`
  }

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
      <ParallaxLayer speed={0.75} sticky={{start: 3, end: 4}} className="content">
        <p>
          Here are some of my favorite projects I've made:
        </p>

        <GHRepoCard username="xiddoc" repo="ComPy" />
        <GHRepoCard username="xiddoc" repo="PySdarot" />
        <GHRepoCard username="xiddoc" repo="LearningRSA" />
        <GHRepoCard username="xiddoc" repo="xiddoc.github.io" />
      </ParallaxLayer>

      {/* THIRD SLIDE: HACKING */}
      <ParallaxLayer speed={0.75} sticky={{start: 5, end: 6}} className="content">
        <p>
          I also like white-hat hacking, here are some exploits I helped fix:
        </p>

        <GHRepoCard username="xiddoc" repo="Hacking-Writeups" />
        <GHMarkDown username="xiddoc" repo="Hacking-Writeups" />
      </ParallaxLayer>

      {/* LAST SLIDE: LINKS */}
      <ParallaxLayer speed={0.75} offset={7} className="content">
        <p>
          Want to reach out and see more? Connect with me!
        </p>
        <SocialIcon style={iconStyle} url="https://github.com/Xiddoc" />
        <SocialIcon style={iconStyle} url="https://www.linkedin.com/in/sajih" />
        <SocialIcon style={iconStyle} url="https://instagram.com/ig.iliketo.party" />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
