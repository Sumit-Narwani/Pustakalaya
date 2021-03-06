const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory
} = require("../controllers/category");

const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../controllers/authentication");

const { getUserById } = require("../controllers/user");

// Params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// Actual Routes goes here
// Create Routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

// Read Routes
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);


// Update Routes
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);


// Delete Route
router.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
  );


module.exports = router;
