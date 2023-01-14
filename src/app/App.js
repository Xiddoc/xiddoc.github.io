import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import RandomLogo from "./logo/RandomLogo";

function App() {
  // noinspection JSValidateTypes
  return (
    <Parallax pages={3}>
      {
        // Make a few of these background emojis
        [...Array(10),].map((v, i) => (
          <ParallaxLayer key={i} offset={Math.random() * 0.85} speed={1 + Math.random()}>
            <RandomLogo />
          </ParallaxLayer>
        ))
      }
      <ParallaxLayer offset={0.2} speed={0.9} className="content">
        <h1>I like to party!!!</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={0.7} speed={1.5} factor={0.3} className="content">
        <p>(Scroll down...)</p>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={1.3} className="content">
        <p>
          Just kidding. I love learning about innovative technologies and building new
          creations to help improve my and others' lives. Amongst my favorite hobbies
          are <code>programming</code> and <code>hacking/pentesting</code>.
        </p>
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} speed={0.25} className="content">
        <a target="_blank"  rel="noreferrer" href="https://github.com/Xiddoc">Check out my GitHub!</a>
        <br /><br />
        (This site is still under development)
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
