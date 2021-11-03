const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const { username } = req.body;
  console.log(req.body);

  const token = jwt.sign({ username }, "some-secret", {
    expiresIn: "1hr",
  });

  return res.status(200).json({
    token,
  });
};
