const express = require("express");
const Data = require("../Pmodels/dataSchema");
const { body, validationResult } = require("express-validator");
const router = express.Router();

//Create a user using:POST "/api/auth/createUser"
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min:3 }),
    body("email", "Enter a valid email").isEmail(),
    body("message", "message is important").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
  
        // Create a new user
        const newData = await Data.create({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
        });
  
        res.status(201).json({ success: true, user: newData });
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, error: "An error occurred while creating the user." });
      }
    }
  );
module.exports = router;