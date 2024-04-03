const JWT = require("jsonwebtoken");
const secretkey = "kTJD2y4On/6SjMEWOLFb6QmggHIE3jkVCX1TxI7QMV4=";

const verifyToken = (req, res, next) => {
  // Get the token from the request cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Verify the token
  JWT.verify(token, secretkey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    } else {
      // If token is valid, attach the decoded user ID to the request object
      req.userId = decoded.id;
      next(); // Move to the next middleware
    }
  });
};

module.exports = verifyToken;
