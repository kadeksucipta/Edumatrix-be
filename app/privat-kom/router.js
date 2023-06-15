const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const PrivatKomController = require("./controller");

router.get("/privatkom", 
 PrivatKomController.index
);
router.post("/privatkom",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Privatkom"),
 PrivatKomController.store
);
router.put("/privatkom/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Privatkom"),
 PrivatKomController.update
);
router.delete("/privatkom/:id",
police_check("delete", "Privatkom"),
 PrivatKomController.destroy
);

module.exports = router;