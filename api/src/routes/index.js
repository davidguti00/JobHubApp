const { Router } = require('express');
const users = require("./users/users.route")
const verify = require("./verify/verify.route")
const jobs = require("./jobs/jobs.route");
const review = require('./review/review.route');
// Importar todos los routers;

const router = Router();

router.use("/users", users);
router.use("/verify", verify);
router.use("/jobs", jobs);
//router.use("/review", review);



module.exports = router;
