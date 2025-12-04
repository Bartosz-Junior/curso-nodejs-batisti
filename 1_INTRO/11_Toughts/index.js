const express = require("express")
const { engine } = require("express-handlebars")
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require("./db/conn")

//Models
const Tought = require('./models/Tought')
const User = require('./models/User')

//Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

//Import Controller
const ToughtController = require("./controllers/ToughtsController")
const { FORCE } = require("sequelize/lib/index-hints")

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())
app.use(express.static('public'))

app.use(
    session({
        name: "session",
        secret: "nosso-secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true,
        }
    }),
)

//flash messages
app.use(flash())

//set session to res
app.use((req, res, next) => {

    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()

})


//Routes
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)

app.get('/', ToughtController.showToughts)

conn
    //.sync({force : true})
    .sync()
    .then(() => {
        app.listen(3000)
    })
