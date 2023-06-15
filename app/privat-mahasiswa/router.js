const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const PrivatMahasiswaController = require("./controller");

router.get("/privatmahasiswa", 
 PrivatMahasiswaController.index
);
router.post("/privatmahasiswa",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "PrivatMahasiswa"),
 PrivatMahasiswaController.store
);
router.put("/privatmahasiswa/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "PrivatMahasiswa"),
 PrivatMahasiswaController.update
);
router.delete("/privatmahasiswa/:id",
police_check("delete", "PrivatMahasiswa"),
 PrivatMahasiswaController.destroy
);

module.exports = router;