const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const PrivatMusikController = require("./controller");

router.get("/privatmusik", 
 PrivatMusikController.index
);
router.post("/privatmusik",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "PrivatMusik"),
 PrivatMusikController.store
);
router.put("/privatmusik/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "PrivatMusik"),
 PrivatMusikController.update
);
router.delete("/privatmusik/:id",
police_check("delete", "PrivatMusik"),
 PrivatMusikController.destroy
);

module.exports = router;