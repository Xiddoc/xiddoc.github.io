# /usr/bin/python3

"""

The Python file which will be run by our WSGI server (currently Gunicorn).

"""

from main import app

if __name__ == "__main__":
    # Run as prod if on WSGI
    app.run()
