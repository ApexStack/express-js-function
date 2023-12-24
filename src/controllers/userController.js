import userService from "../services/userService.js";

const userController = {
  getUser: (req, res) => {
    console.log("I am called");
    const userId = req.params.id;
    const user = userService.getUser(userId);
    res.json(user);
  },

  createUser: (req, res) => {
    const { username, email } = req.body;
    const newUser = userService.createUser(username, email);
    res.status(201).json(newUser);
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    const updatedUser = userService.updateUser(userId, username, email);
    res.json(updatedUser);
  },

  deleteUser: (req, res) => {
    const userId = req.params.id;
    userService.deleteUser(userId);
    res.sendStatus(204);
  },
};

export default userController;
