const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const AkmilController = require("./controller");

router.get("/bimbelsekdin", 
 AkmilController.index
);
router.post("/bimbelsekdin",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "BimbelSekdin"),
 AkmilController.store
);
router.put("/bimbelsekdin/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "BimbelSekdin"),
 AkmilController.update
);
router.delete("/bimbelsekdin/:id",
police_check("delete", "BimbelSekdin"),
 AkmilController.destroy
);

module.exports = router;