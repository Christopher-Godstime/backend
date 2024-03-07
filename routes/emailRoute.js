const express = require("express");
const router = express.Router();
const { send_email } = require("../controllers/emailController");
const { check, body } = require("express-validator");

router.post(
  "/send_email",
  [
    body("first_name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("First name required"),
    body("last_name").trim().not().isEmpty().withMessage("Last name required"),
    body("phone_number")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Phone number required"),
    body("email").trim().isEmail().withMessage("Enter valid email."),
  ],
  send_email
);

module.exports = router;
