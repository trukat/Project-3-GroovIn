const Confirm = require("../models/confirmationModel");
const User = require("../models/userModel");

module.exports = {
  confirmUser: async (req, res) => {
    try {
      const confirmation = await Confirm.findOne({ token: req.body.token });

      const confirmedUser = await User.findById(confirmation.authorId);

      confirmedUser.confirmed = true;
      confirmedUser.save();

      res.send("success");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
};
