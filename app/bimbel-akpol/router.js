const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const AkmilController = require("./controller");

router.get("/bimbelakpol", 
 AkmilController.index
);
router.post("/bimbelakpol",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "BimbelAkpol"),
 AkmilController.store
);
router.put("/bimbelakpol/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "BimbelAkpol"),
 AkmilController.update
);
router.delete("/bimbelakpol/:id",
police_check("delete", "BimbelAkpol"),
 AkmilController.destroy
);

module.exports = router;