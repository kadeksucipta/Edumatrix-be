const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const productController = require("./controller");

router.get("/landing", 
    productController.index
);
router.post("/landing",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Product"),
    productController.store
);
router.put("/landing/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Product"),
    productController.update
);
router.delete("/landing/:id",
police_check("delete", "Product"),
    productController.destroy
);

module.exports = router;