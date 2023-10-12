import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    const userEmailOrPasswordIncorrect = () => {
      return res
        .status(401)
        .json({ error: 'make sure your password or email are correct' })
    }

    const { email, password } = req.body

    if (!(await schema.isValid(req.body))) userEmailOrPasswordIncorrect()

    const user = await User.findOne({
      where: { email },
    })

    if (!user) userEmailOrPasswordIncorrect()

    if (!(await user.checkPassword(password))) userEmailOrPasswordIncorrect()

    return res.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
    })
  }
}

export default new SessionController()
