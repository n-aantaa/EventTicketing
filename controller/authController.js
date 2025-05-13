const User = require('../model/User');
const bcrypt = require('bcrypt');
 
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
 
  if (!email || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }
 
  const foundUser = await User.findOne({ email: email }).exec();
  if (!foundUser) return res.status(401).json({ message: "Unauthorized" });
 
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    res.json({ success: `User ${email} is logged in.` });
  } else {
    res.sendStatus(401);
  }
};
 
module.exports = handleLogin;