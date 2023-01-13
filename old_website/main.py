"""
Flask application.
Inherits the Flask app, then creates the routes from the class methods.
"""
from flaskapp import FlaskApp
from config import log

# Always initialize the app when this file is run
log.info("Init flask app...")
app = FlaskApp()

# However, only if this file is run DIRECTLY, then we will start the app in debug mode
if __name__ == "__main__":
    # DEBUG MODE IF THIS FILE IS RUN DIRECTLY

    # Easy template reloading
    app.config["TEMPLATES_AUTO_RELOAD"] = True

    # Run on all interfaces
    log.info("Running flask app...")
    app.run(host="0.0.0.0", port=8080, debug=True)
