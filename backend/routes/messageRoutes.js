
const express = require("express");
const { sendMessage, allMessages } = require("../controllers/messageController");
const { protect } = require("../middlewares/authMiddleware");
// const {
//   allMessages,
//   sendMessage,
// } = require("../controllers/messageControllers");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router; 