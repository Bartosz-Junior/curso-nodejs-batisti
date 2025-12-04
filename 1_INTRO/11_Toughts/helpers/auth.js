const session = require('express-session')
const FileStore = require('session-file-store')(session)

module.exports.checkAuth = function (req, res, next) {
  const userId = req.session.userid

  if (!userId) {
    res.redirect('/login')
  }

  next()
}