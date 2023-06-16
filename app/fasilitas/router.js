const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const FasilitasController = require("./controller");

router.get("/fasilitas", 
 FasilitasController.index
);
router.post("/fasilitas",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Fasilitas"),
 FasilitasController.store
);
router.put("/fasilitas/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Fasilitas"),
 FasilitasController.update
);
router.delete("/fasilitas/:id",
police_check("delete", "Fasilitas"),
 FasilitasController.destroy
);

module.exports = router;