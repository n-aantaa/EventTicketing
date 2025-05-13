const User = require('../model/User');
const bcrypt = require('bcrypt');
 
const handleNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email and password are required." });
  }
 
  const duplicate = await User.findOne({ email: email }).exec();
  if (duplicate) return res.status(409).json({ message: "Duplicate username." });
 
  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const result = await User.create({ email:email, name:name, password: hashedPwd });
    
    console.log(result);
    res.status(201).json({ success: `New user ${email} created.` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
module.exports = handleNewUser;