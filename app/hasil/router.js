const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const hasilController = require("./controller");

router.get("/hasil", 
    hasilController.index
);
router.post("/hasil",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Product"),
    hasilController.store
);
router.put("/hasil/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Product"),
    hasilController.update
);
router.delete("/hasil/:id",
police_check("delete", "Product"),
    hasilController.destroy
);

module.exports = router;