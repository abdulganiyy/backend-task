const express = require("express");

const login = require("./controllers/Login");
const patchProuctController = require("./controllers/Patch");
const resizeImageController = require("./controllers/ImageResize");
const protect = require("./controllers/Protect");

const app = express();

app.use(express.json());

// routes
app.post("/login", login);
app.patch("/update-product", protect, patchProuctController);
app.post("/resize-image", protect, resizeImageController);

const PORT = process.env.PORT || 8000;

module.exports = app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
