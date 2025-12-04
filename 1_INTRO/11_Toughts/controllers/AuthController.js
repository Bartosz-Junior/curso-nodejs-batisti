const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class AuthController {

    static login(req, res) {
        res.render('auth/login')
    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req, res) {
        const {name, email, password, confirmpassword} = req.body

        //Password match validation
        if(password != confirmpassword) {
            //Mensagem para o usuário
            req.flash('message', 'As senhas são diferentes!')
            res.render('auth/register')

            return
        }

        //check if user exists
        const checkUserIfExists = await User.findOne({where: { email:email }})

        if(checkUserIfExists) {
            req.flash('message', 'e-mail já cadastrado!')
            res.render('auth/register')

            return
        }

        //Create a apassword
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword,
        }

        try{
           const createUser = await User.create(user)

            //Initialize session
            req.session.userid = createUser.id
            
            req.flash('message', 'Cadastro realizado com sucesso!')

            req.session.save(() => {
                res.redirect('/')
            })
        }catch(err) {
            console.log(err)
        }
    }

    static async logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }

    static async loginPost(req,res) {
        const {email, password} = req.body

        //find User
        const user = await User.findOne({where: { email:email}})

        if(!user) {
            req.flash('message', 'Usuário não encontrado!')
            res.render('auth/login')

            return
        }
        //Check if password match

        const passwordMatch = bcrypt.compareSync(password, user.password)

        if(!passwordMatch) {
            req.flash('message', 'Usuário ou senha incorretos!')
            res.render('auth/login')

            return
        }

        //Initialize Session
        req.session.userid = user.id

        req.flash('message', 'Login realizado com sucesso!')

        req.session.save(() => {
            res.redirect('/')           
        })
    }
}