const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const BimbelPendidikanController = require("./controller");

router.get("/bimbinganpendidikan", 
 BimbelPendidikanController.index
);
router.post("/bimbinganpendidikan",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "BimbinganPendidikan"),
 BimbelPendidikanController.store
);
router.put("/bimbinganpendidikan/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "BimbinganPendidikan"),
 BimbelPendidikanController.update
);
router.delete("/bimbinganpendidikan/:id",
police_check("delete", "BimbinganPendidikan"),
 BimbelPendidikanController.destroy
);

module.exports = router;