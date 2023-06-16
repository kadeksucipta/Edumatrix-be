const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const PtnFavoritController = require("./controller");

router.get("/ptnfavorit", 
 PtnFavoritController.index
);
router.post("/ptnfavorit",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "PtnFavorit"),
 PtnFavoritController.store
);
router.put("/ptnfavorit/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "PtnFavorit"),
 PtnFavoritController.update
);
router.delete("/ptnfavorit/:id",
police_check("delete", "PtnFavorit"),
 PtnFavoritController.destroy
);

module.exports = router;