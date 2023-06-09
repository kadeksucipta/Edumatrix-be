const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const testimoniController = require("./controller");

router.get("/testimoni", 
 testimoniController.index
);
router.post("/testimoni",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Testimoni"),
 testimoniController.store
);
router.put("/testimoni/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Testimoni"),
 testimoniController.update
);
router.delete("/testimoni/:id",
police_check("delete", "Testimoni"),
 testimoniController.destroy
);

module.exports = router;