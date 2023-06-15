const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const PrivatBipaController = require("./controller");

router.get("/privatbipa", 
 PrivatBipaController.index
);
router.post("/privatbipa",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "PrivatBipa"),
 PrivatBipaController.store
);
router.put("/privatbipa/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "PrivatBipa"),
 PrivatBipaController.update
);
router.delete("/privatbipa/:id",
police_check("delete", "PrivatBipa"),
 PrivatBipaController.destroy
);

module.exports = router;