import epxress from "express";
import bodyParser from "body-parser";

const app = epxress();
const port = 3000;

// In-memory storage for posts
let posts = [];

app.use(epxress.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/new", (req, res) => {
    res.render("newPost.ejs");

});

app.post("/new", (req, res) => {
    const {title, content} = req.body;

    // Add the new post to the in-memory storage
    const newPost = {
        title: title,
        content: content,
        createdAt: new Date().toLocaleString(),
};

    posts.push(newPost);

    // Redirect back to the home page to view all posts
    res.redirect('/');
});

app.get("/my-posts", (req, res) => {
    res.render("userPosts.ejs", {posts : posts});

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });



