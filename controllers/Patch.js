const jsonpatch = require("jsonpatch");

module.exports = (req, res) => {
  try {
    const reqObj = { ...req.body };

    thepatch = [{ op: "replace", path: "/title", value: "Apple" }];

    patchedObj = jsonpatch.apply_patch(reqObj, thepatch);

    return res.status(200).json({
      status: "success",
      product: patchedObj,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};
