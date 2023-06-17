const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const FasilitasAkmilController = require("./controller");

router.get("/fasilitasakmil", 
 FasilitasAkmilController.index
);
router.post("/fasilitasakmil",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "FasilitasAkmil"),
 FasilitasAkmilController.store
);
router.put("/fasilitasakmil/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "FasilitasAkmil"),
 FasilitasAkmilController.update
);
router.delete("/fasilitasakmil/:id",
police_check("delete", "FasilitasAkmil"),
 FasilitasAkmilController.destroy
);

module.exports = router;