const dataUlasanController = require("./controller");
// const {police_check} = require("../../middlewares");

const router = require("express").Router();

router.post(
    "/dataulasan",
    // police_check("create", "DeliveyAddress"),
    dataUlasanController.store
);

router.put("/dataulasan/:id", dataUlasanController.update);
router.delete("/dataulasan/:id", dataUlasanController.destroy);

router.get(
    "/dataulasan",
    // police_check("view", "DeliveryAddress"),
    dataUlasanController.index
);

module.exports = router;