import { Router } from "express";
import passport from "../utils/passport.js";
const initAPIRoutes = () => {
  const router = Router();
  router.use(
    "/login",
    passport.authenticate("discord", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/perfil");
    }
  );
  router.use("/perfil", (req, res) => {
    res.json({
      datos_json: req.user,
    });
  });
  return router;
};

export { initAPIRoutes };
