const { validationResult } = require("express-validator");
const {
  hash,
  verify,
  getRandomIntInclusive,
  capitalizeFirstLetter,
  decapitalize,
} = require("../utils/helper");
const Mailer = require("../utils/mailer");

exports.send_email = async (req, res, next) => {
  const body = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      let validationErrors = [];

      for (const error of errors.array()) {
        validationErrors.push(error.msg);
      }

      return res.status(400).json({
        status: false,
        message: "Oops, something went wrong.",
        errors: validationErrors,
      });
    }

    console.log(body);

    const { assessment1, assessment2, assessment3, assessment4, assessment5 } =
      body;
    const totalScore =
      assessment1 + assessment2 + assessment3 + assessment4 + assessment5;

    let result;
    const percentage = Math.round((totalScore / 50) * 100);

    if (percentage < 50 && body.category === 1) {
      Mailer.email1({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: body.email,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });
    } else if (percentage >= 50 && percentage < 80 && body.category === 1) {
      Mailer.email2({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: body.email,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });
    } else if (percentage > 80 && body.category === 1) {
      Mailer.email3({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: body.email,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });
    } else if (body.category === 2) {
      Mailer.mastery({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: body.email,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });

      Mailer.masteryResponse({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: "bimbomeselecoaching@gmail.com",
        phone_number: body.phone_number,
        email_address: body.email,
        country: body.location,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });
    } else if (body.category === 3) {
      Mailer.discovery({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: body.email,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });

      Mailer.discoveringResponse({
        first_name: body.first_name,
        last_name: body.last_name,
        recipient: "bimbomeselecoaching@gmail.com",
        phone_number: body.phone_number,
        email_address: body.email,
        country: body.location,
        score: percentage,
        base_url_api: req.protocol + "://" + req.headers.host + "/api",
        base_url: req.protocol + "://" + req.headers.host,
      });
    }

    return res.status(200).json({
      status: true,
      message: "Success",
      result: result,
    });
  } catch (error) {
    next(error);
  }
};
