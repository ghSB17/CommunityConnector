const express = require("express");
const router = express.Router();

//@route: GET to /api/users/test
//@desc: Testing the GET route
//@access: public
router.get("/test", (req, res) => {
  res.json({msg:"testing /api/users/test"});
});


module.exports=router