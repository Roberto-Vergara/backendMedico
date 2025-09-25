import { Router } from "express";
const router = Router();

router.get("/inicio", (req, res) => {

    res.sendFile("index.html", { root: "front" });
});


router.get("/home",(req,res)=>{
    res.sendFile("home.html", { root: "front" });
})



export default router;