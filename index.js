import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static(("public")));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    global.checkBlog = null;
    global.inUsername = null;
    res.render("index.ejs", {
        username: inUsername,
        checkBlog : checkBlog
    });
});

app.get("/signup", (req,res) => {
    res.render("signup.ejs");
})

app.post("/signup", (req, res) => {
    inUsername = req.body.username;
    global.inPassword = req.body.password;
    res.render("login.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {
    global.inUsername_check = req.body.username;
    global.inPassword_check = req.body.password;

    
    if (inUsername_check === inUsername && inPassword_check === inPassword) {
        res.render("index.ejs", {
            username: inUsername_check
        });
    }
    else{
        res.redirect("login");
    }
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.post("/blog", (req, res) => {
    global.topic = req.body.topic;
    global.blogText = req.body.blogText;
    checkBlog = true;

    res.render("index.ejs", {
        username: inUsername,
        topic : topic,
        blogText : blogText,
        checkBlog : checkBlog
    })
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
