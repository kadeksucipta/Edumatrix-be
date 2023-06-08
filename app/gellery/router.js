const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const productController = require("./controller");

router.get("/gallery", 
    productController.index
);
router.post("/gallery",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Product"),
    productController.store
);
router.put("/gallery/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Product"),
    productController.update
);
router.delete("/gallery/:id",
police_check("delete", "Product"),
    productController.destroy
);

module.exports = router;