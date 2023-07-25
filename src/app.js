import express from "express";
import session from "express-session";

const app = express();
app.use(express.json()); //! Middleware para leer json
app.use("/api", initAPIRoutes());

export default app;
