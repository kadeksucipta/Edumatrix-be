const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const SnbtController = require("./controller");

router.get("/snbt", 
 SnbtController.index
);
router.post("/snbt",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Snbt"),
 SnbtController.store
);
router.put("/snbt/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Snbt"),
 SnbtController.update
);
router.delete("/snbt/:id",
police_check("delete", "Snbt"),
 SnbtController.destroy
);

module.exports = router;