const express = require("express");
const path = require("path");
const uploadImg = require("../middlewares/uploadImg");
const {
  createProductController,
  getProductController,
  getProductsController,
  updateProductController,
  deleteProductController,
  uploadImageProductController,
  getImageProductController,
  getPriceOfProductController,
} = require("../controllers/productsController");
const auth = require("../middlewares/auth");

const productRouter = express.Router();

productRouter.use(
  "/images",
  express.static(path.join(__dirname, "..", "uploads"))
);

productRouter.post("/", auth, createProductController);
productRouter.get("/", getProductsController);
productRouter.get("/price", getPriceOfProductController);
productRouter.put("/:id", auth, updateProductController);
productRouter.delete("/:id", auth, deleteProductController);
productRouter.get("/:id", auth, getProductController);
productRouter.put(
  "/:id/image",
  uploadImg.single("image"),
  uploadImageProductController
);
productRouter.get("/images/:img", getImageProductController);

module.exports = productRouter;
