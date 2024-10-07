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



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


//continue on newPost.ejs and check index.ejs again

