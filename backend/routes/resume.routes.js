const express = require("express");
const multer = require("multer");
const pdfparse = require("pdf-parse");
const { setResumeText } = require("../store/resumeStore");
const router = express.Router();
const upload = multer();




router.post("/upload", upload.single("resume"), async (req, res) =>{
    try{
        if(!req.file){
            return res.status(400).json({message: "No file uploaded !"});
        }
            let text = "";
        if(req.file.mimetype === "application /pdf"){
            const data = await pdfparse(req.file.buffer);
            text == data.text;
        }else{
          text = req.file.buffer.toString("utf-8");
        }
        res.json({message: "Resume uploaded succesfully"});
    }catch(err){
        res.status(500).json({message:" Error processing resume"})
    }
});

module.exports = router;