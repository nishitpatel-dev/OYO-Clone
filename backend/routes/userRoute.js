const express = require("express");
const {
  signUpController,
  loginController,
} = require("../controllers/userController");
const { signupSchema, loginSchema } = require("../validators/userValidator");
const validatorMiddleware = require("../middlewares/validatorMiddleware");
const { hotelController } = require("../controllers/hotelController");
const {
  singleHotelController,
} = require("../controllers/singleHotelController");
const { facilitiesController } = require("../controllers/facilitiesController");
const {
  searchHotelController,
} = require("../controllers/searchHotelController");
const {
  pricesearchController,
} = require("../controllers/pricesearchController");
const {
  paymentcontroller,
  paymentverification,
} = require("../controllers/paymentcontroller");

const router = express.Router();

router
  .route("/signup")
  .post(validatorMiddleware(signupSchema), signUpController);
router.route("/login").post(validatorMiddleware(loginSchema), loginController);
router.route("/hotels").get(hotelController);
router.route("/facilities").get(facilitiesController);
router.route("/hotels/:id").get(singleHotelController);
router.route("/search").get(searchHotelController);
router.route("/price").get(pricesearchController);
router.route("/payment").post(paymentcontroller);
router.route("/paymentverification").post(paymentverification);

module.exports = router;
