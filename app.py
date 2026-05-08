# from flask import Flask, render_template
# import os

# app = Flask(__name__)

# @app.route("/")
# def home():

#     images = os.listdir("static/images")
#     videos = os.listdir("static/videos")

#     return render_template(
#         "index.html",
#         images=images,
#         videos=videos
#     )

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)