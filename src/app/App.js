import './App.css';

function App() {
  return (
    <div id="canvas">
      <div className="content">
        <h1>I like to party!!!</h1>
        <p>
          Just kidding. I love learning about innovative technologies and building new
          creations to help improve my and others' lives. Amongst my favorite hobbies
          are <code>programming</code> and <code>hacking/pentesting</code>.
          <br /><br />
          <a target="_blank"  rel="noreferrer" href="https://github.com/Xiddoc">Check out my GitHub!</a>
          <br /><br />
          (This site is still under development)
        </p>
      </div>
    </div>
  );
}

// Create image element
const img = new Image();
img.classList.add("content");
img.style.width = "3%";
img.style.zIndex = "-1";

// Set up class for the emoji image thing
class FloatyEmoji {
  constructor() {
    // Add to DOM
    this.domImg = document.getElementById('canvas').appendChild(img.cloneNode());
    this.domImg.style.left = Math.floor(document.body.clientWidth * Math.random()) + "px";
    // Set up physics stuff
    this.resetPhysics();
    // Set location to top
    this.render();
    // Make the update loop keep ticking asynchronously
    setInterval(this.update.bind(this), 1000 / 60);
  }

  resetPhysics() {
    // Set variables to defaults
    this.acc = 0;
    this.vel = 1;
    this.y = -this.domImg.clientHeight;
  }

  render() {
    // Set the Y position to our saved Y position
    this.domImg.style.top = Math.floor(this.y) + "px";
  }

  update() {
    // Perform physics!
    this.acc += 0.001;
    this.vel += this.acc;
    this.y += this.vel;
    // Update image location
    this.render();
    // If we are below the screen
    if (document.body.clientHeight < this.y) {
      // Reset to top of page
      this.resetPhysics();
    }
  }
}

function startFloatyEmojis() {
  // Make a few new emojis
  for (let i = 0; i < 10; i++) {
    // At different times
    setTimeout(
        () => {
          new FloatyEmoji();
        },
        Math.random() * 3000
    );
  }
}

// Manual caching code for the background floaty emoji image
// Download the image
const xhr = new XMLHttpRequest();
xhr.open("get", "favicon.png");
xhr.responseType = "blob";
xhr.onload = function() {
  // Read the stream
  const fr = new FileReader();
  // Once the stream is loaded,
  fr.onload = function() {
    // Now that we have the data URI for the floaty image
    // We can now write it to the image, then start the floaty
    // background emoji function
    img.src = this.result.toString();
    startFloatyEmojis();
  };
  // Start reading the data stream asynchronously
  fr.readAsDataURL(xhr.response);
};
// Start the XHR request
xhr.send();

export default App;
