const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split("Bearer ")[1];
    }

    if (!token) {
      return res.status(400).json({
        status: "fail",
        message: "You are not logged in, Please login to gain access",
      });
    }

    const decoded = await jwt.verify(token, "some-secret");

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};
