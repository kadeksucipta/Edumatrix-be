const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const PrivatUtbkController = require("./controller");

router.get("/privatutbk", 
 PrivatUtbkController.index
);
router.post("/privatutbk",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Privatutbk"),
 PrivatUtbkController.store
);
router.put("/privatutbk/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Privatutbk"),
 PrivatUtbkController.update
);
router.delete("/privatutbk/:id",
police_check("delete", "Privatutbk"),
 PrivatUtbkController.destroy
);

module.exports = router;