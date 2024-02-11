const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { handleAllUsers } = require("../controllers/user");
const { getUserById } = require("../controllers/user");
const { updateUserById } = require("../controllers/user");
const { deleteUserById } = require("../controllers/user");
const { createNewUser } = require("../controllers/user");

router.route("/").get(handleAllUsers).post(createNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
