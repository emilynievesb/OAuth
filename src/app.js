import express from "express";
import session from "express-session";
import passport from "passport";
import { initAPIRoutes } from "./routes/routes.js";

const app = express();
app.use(express.json()); //! Middleware para leer json
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "palabrasecreta",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());
app.use("/", initAPIRoutes());

export default app;
