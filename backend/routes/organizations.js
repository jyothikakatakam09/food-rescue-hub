
const express = require("express");
const router = express.Router();

const Organization = require("../models/Organization");
const { authenticateToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Get all approved organizations
router.get("/", async (req, res) => {
  try {
    const organizations = await Organization.find({
      verificationStatus: "APPROVED"
    });

    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch organizations" });
  }
});

module.exports = router;
