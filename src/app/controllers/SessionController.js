import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    // const userEmailOrPasswordIncorrect = () => {
    //   return res
    //     .status(401)
    //     .json({ error: 'make sure your password or email are correct' })
    // }

    const { email, password } = req.body

    if (!(await schema.isValid(req.body)))
      return res
        .status(401)
        .json({ error: 'make sure your password or email are correct' })

    const user = await User.findOne({
      where: { email },
    })

    if (!user)
      return res
        .status(401)
        .json({ error: 'make sure your password or email are correct' })

    if (!(await user.checkPassword(password)))
      return res
        .status(401)
        .json({ error: 'make sure your password or email are correct' })

    return res.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
    })
  }
}

export default new SessionController()
