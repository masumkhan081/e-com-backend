const { Router } = require("express");
const router = Router();
const tktTypeController = require("./tktType.controller");
const validateRequest = require("../../../middlewares/validateRequest");
const ticketIssueTypeSchmea = require("./tktType.validate");
//
router.post("/", tktTypeController.createTktType);
router.get("/", tktTypeController.getTktTypes);
router.patch("/:id", tktTypeController.updateTktType);
router.delete("/:id", tktTypeController.deleteTktType);

module.exports = router;
