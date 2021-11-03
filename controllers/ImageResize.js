const imageThumbnail = require("image-thumbnail");

module.exports = async (req, res) => {
  const { src } = req.body;

  try {
    let options = { width: 50, height: 50, responseType: "base64" };

    const thumbnail = await imageThumbnail({ uri: src }, options);
    console.log(thumbnail);

    return res.status(200).json({
      status: "success",
      thumbnail,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};
