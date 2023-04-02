const router = require("express").Router();

const adminRouter = require("./Admin");
const guestRouter = require("./Guests");
const giftRouter  = require("./Gifts");

router.use("/", adminRouter);
router.use("/", guestRouter);
router.use("/", giftRouter);

module.exports = router;