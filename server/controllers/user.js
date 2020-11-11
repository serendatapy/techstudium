const user = require('../models/user');

exports.create = async (req, res) => {
  try {

  }
  catch (err) {

  }
}

exports.getAll = async (req, res) => {
  const users = await user.getAll();
  console.log(users);
  res.send(users);
}