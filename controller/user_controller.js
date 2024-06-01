const userService = require('../services/user_service');

class UserController {
  async create(req, res) {
    const { username, email, password } = req.body;
    const user = await userService.createUser({ username, email, password });
    res.json(user);
  }

  async getAll(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getById(req, res) {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }

  async update(req, res) {
    const { username, email, password } = req.body;
    const user = await userService.updateUser(req.params.id, { username, email, password });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }

  async delete(req, res) {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.sendStatus(204);
  }
}

module.exports = new UserController();
