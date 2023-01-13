"""
Flask app class.
"""
from os.path import join

from flask import Flask, send_from_directory, render_template, request
from minify_html import minify

from config import log


class FlaskApp(Flask):
    """
    Flask App class.
    """

    def __init__(self):
        super().__init__(__name__)

        # Create routes
        log.info("Setting up routes...")
        routes = {
            "/": self.index,
            "/favicon.ico": self.favicon,
        }

        # Add routes
        for path, route in routes.items():
            # Make sure to use kwargs, because the view_func is not the second arg.
            # We will not use a "Flask endpoint" for now (https://stackoverflow.com/a/19262349/11985743).
            self.add_url_rule(
                rule=path,
                view_func=route,
                methods=["GET"]
            )

        # Register wrapper func
        self.before_request(self.wrapper)

    @staticmethod
    def wrapper():
        """
        Wrapper function for all route calls.
        """
        log.info(f"<{request.endpoint}>: Args({str(dict(request.args))}) UA({request.user_agent})")

    def index(self):
        """
        Root path.
        """
        # Minify if this is prod
        return minify(
            render_template("index.html"),
            minify_js=not self.debug,
            minify_css=not self.debug
        )

    def favicon(self):
        """
        App Favicon.
        """
        return send_from_directory(join(self.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')
