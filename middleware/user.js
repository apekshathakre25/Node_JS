const fs = require("fs");

const logReqRes = (fileName) => {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `${Date.now()} : ${req.method} : ${req.url}\n`,
      (err, data) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
        next();
      }
    );
  };
};

module.exports = {
  logReqRes,
};
