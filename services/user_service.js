const userRepository = require('../repositories/user_repository');
const bcrypt = require("bcrypt")

class userService{
  static async register(req,res,next) {
    const {name,email,password} = req
    const hashedPassword = bcrypt.hashSync(password,8)

    const user = await userRepository.register({
      name,email,hashedPassword
    })
    return user
  }
}

module.exports = userService;