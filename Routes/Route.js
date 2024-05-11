const express = require("express");
const {
  addAnime,
  getData,
  updateData,
  deleteData,
} = require("../Controllers/AnimeCtrl");
const router = express.Router();

router.route("/create").post(addAnime);
router.route("/getData").get(getData);
router.route("/updateData/:id").post(updateData);
router.route("/deleteData/:id").post(deleteData);
module.exports = router;
