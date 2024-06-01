const User = require('../models/user');

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByUsername(username) {
    return await User.findOne({ where: { username } });
  }

  async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.destroy();
  }

  static async register(req,res,next){
    try{
      const {name,email,hashedPassword} = req
      const user = await User.create({
          name,email,password:hashedPassword
      });
      return user
    } catch(e){
        console.log(e)
    }
  }
}

module.exports = UserRepository;
