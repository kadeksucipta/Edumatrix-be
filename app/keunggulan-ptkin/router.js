const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const UmpTkinController = require("./controller");

router.get("/umptkin", 
 UmpTkinController.index
);
router.post("/umptkin",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "UmpTkin"),
 UmpTkinController.store
);
router.put("/umptkin/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "UmpTkin"),
 UmpTkinController.update
);
router.delete("/umptkin/:id",
police_check("delete", "UmpTkin"),
 UmpTkinController.destroy
);

module.exports = router;