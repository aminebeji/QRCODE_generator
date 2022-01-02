const fs = require("fs");
module.exports = async (url, title) => {
  await fs.writeFile(
    process.cwd() + "/qrcodes/" + `${title}.jpeg`,
    url,
    function (err) {
      if (err) {
        return { status: "error", error: "Error in generate QR CODE" };
      } else {
        return {
          status: "succes",
          data: "/api/qrcodes/" + `${title}.jpeg`,
        };
      }
    }
  );
};
