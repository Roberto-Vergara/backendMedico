import { Router } from "express";
import auth from "../middlewares/authUser.js"

const router = Router();

router.get("/inicio", (req, res) => {

    res.sendFile("index.html", { root: "front" });
});

router.get("/login", (req, res) => {

    res.sendFile("login.html", { root: "front" });
});

router.get("/registro", (req, res) => {

    res.sendFile("registro.html", { root: "front" });
});

router.get("/recuperar", (req, res) => {

    res.sendFile("login.html", { root: "front" });
});

router.get("/analisis",auth, (req, res) => {

    res.sendFile("analisis.html", { root: "front" });
});





export default router;