import { Router } from "express";
const router = Router();

router.get("/inicio", (req, res) => {

    res.sendFile("index.html", { root: "front" });
});


router.get("/home",(req,res)=>{
    console.log(req.email)
    res.json("funciono")
    // res.sendFile("home.html", { root: "front" });
})



export default router;