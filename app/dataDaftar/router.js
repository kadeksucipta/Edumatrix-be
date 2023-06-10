const dataDaftarController = require("./controller");
// const {police_check} = require("../../middlewares");

const router = require("express").Router();

router.post(
    "/datadaftar",
    // police_check("create", "DeliveyAddress"),
    dataDaftarController.store
);

router.put("/datadaftar/:id", dataDaftarController.update);
router.delete("/datadaftar/:id", dataDaftarController.destroy);

router.get(
    "/datadaftar",
    // police_check("view", "DeliveryAddress"),
    dataDaftarController.index
);

module.exports = router;