const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const keunggulanController = require("./controller");

router.get("/keunggulan", 
 keunggulanController.index
);
router.post("/keunggulan",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Keunggulan"),
 keunggulanController.store
);
router.put("/keunggulan/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Keunggulan"),
 keunggulanController.update
);
router.delete("/keunggulan/:id",
police_check("delete", "Keunggulan"),
 keunggulanController.destroy
);

module.exports = router;