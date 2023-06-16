const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const AkmilController = require("./controller");

router.get("/bimbelakmil", 
 AkmilController.index
);
router.post("/bimbelakmil",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "BimbelAkmil"),
 AkmilController.store
);
router.put("/bimbelakmil/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "BimbelAkmil"),
 AkmilController.update
);
router.delete("/bimbelakmil/:id",
police_check("delete", "BimbelAkmil"),
 AkmilController.destroy
);

module.exports = router;