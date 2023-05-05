import fileService from "./fileService.js";

class Controller {
  getFullInfo(req, res) {
    try {
      const result = fileService.getAllUsers();
      return res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteUser(req, res) {
    try {
      const result = fileService.deleteUser(req.body.userId);
      return res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async addUser(req, res) {
    try {
      const users = await fileService.addUser(req.body);
      return res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async editUser(req, res) {
    try {
      const user = await fileService.editUser(req.body);
      return res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new Controller();
