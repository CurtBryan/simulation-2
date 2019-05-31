require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
let { SESSION_SECRET, CONNECTION_STRING } = process.env;
const massive = require("massive");
const PORT = 4001;
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);
app.use(express.static(`${__dirname}/../build`));

app.get("/api/homes", (req, res) => {
  const db = req.app.get("db");
  db.get_homes()
    .then(homes => {
      res.status(200).send(homes);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/homes", (req, res) => {
  const {
    name,
    address,
    city,
    state,
    zipcode,
    mortage,
    rent,
    user_id,
    image
  } = req.body;
  const db = req.app.get("db");
  db.add_home([
    name,
    address,
    city,
    state,
    zipcode,
    mortage,
    rent,
    user_id,
    image
  ])
    .then(products => {
      res.status(200).send(products);
    })
    .catch(err => console.log(err));
});

app.get("/api/users", (req, res) => {
  const db = req.app.get("db");
  db.get_users()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/users", (req, res) => {
  const { username } = req.body;
  const db = req.app.get("db");
  db.add_user(username)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => console.log(err));
});

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db is on");
  })
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
