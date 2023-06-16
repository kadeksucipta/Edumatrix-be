const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const SuccessStoryController = require("./controller");

router.get("/successstory", 
 SuccessStoryController.index
);
router.post("/successstory",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "SuccessStory"),
 SuccessStoryController.store
);
router.put("/successstory/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "SuccessStory"),
 SuccessStoryController.update
);
router.delete("/successstory/:id",
police_check("delete", "SuccessStory"),
 SuccessStoryController.destroy
);

module.exports = router;