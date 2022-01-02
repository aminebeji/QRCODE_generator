const qr = require("qrcode");
const SaveFile = require("./saveFile");
module.exports = async (data, title) => {
  let result = { status: "error" };
  return await qr
    .toBuffer(data, {
      errorCorrectionLevel: "H",
      quality: 1,
      margin: 0,
      width: 450,
    })
    .then(function (url) {
      SaveFile(url, title);
      result = {
        status: "succes",
        data: "/api/qrcodes/" + `${title}.jpeg`,
      };
      return result;
    })
    .catch((err) => {
      result = { status: "error", error: "Error in generate QR CODE" };
      return result;
    });
};
