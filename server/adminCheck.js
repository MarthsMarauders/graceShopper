const path = require('path')

module.exports = (req, res, next) => {
  if (req.user && req.user.isAdmin) next()
  else {
    res
      .status(401)
      .sendFile('/public/401-error.jpg', {root: path.dirname(__dirname)})
  }
}
