const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const AgamaIslamController = require("./controller");

router.get("/agamaislam", 
 AgamaIslamController.index
);
router.post("/agamaislam",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "AgamaIslam"),
 AgamaIslamController.store
);
router.put("/agamaislam/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "AgamaIslam"),
 AgamaIslamController.update
);
router.delete("/agamaislam/:id",
police_check("delete", "AgamaIslam"),
 AgamaIslamController.destroy
);

module.exports = router;