const getAllUsersCtrl = (req, res) => {
  return res.status(200).json({
    data: [],
    message: 'all user data fetched',
  });
};
const findUserCtrl = (req, res) => {
  return res.status(200).json({
    data: [],
    message: 'user data fetched',
  });
};

module.exports = {
  getAllUsersCtrl,
  findUserCtrl,
};
