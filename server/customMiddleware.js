function customMiddleware(req, res, next) {
  if (req.user.isAdmin === 'false') {
    // if user is not logged-in redirect back to login page //
    res.send(401, 'Unauthorized')
  } else {
    next()
  }
}

module.exports = customMiddleware
