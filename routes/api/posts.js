const express = require("express");
const router = express.Router();

//@route: GET to /api/posts/test
//@desc: Testing the GET route
//@access: public
router.get("/test", (req, res) => {
  res.json({ msg: "testing /api/posts/test" });
});


module.exports = router;
