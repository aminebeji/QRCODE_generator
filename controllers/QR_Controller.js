const QR_CODE = require("./../services/QR_CODE");
const QR_Controller = async (req, res) => {
  if (!req.body.title || !req.body.url) {
    return res.status(400).json({ message: "Invalid Request !" });
  }
  let result = await QR_CODE(req.body.url, req.body.title);
  console.log(result);
  if (result?.status == "error") {
    return res.status(400).json({ message: "error in generate QRCODE" });
  } else {
    return res.status(200).json(result);
  }
};
module.exports = QR_Controller;