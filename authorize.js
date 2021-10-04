const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === 'kaneki') {
    req.user = { name: 'kanekiL', is: 3 }
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
}
module.exports = authorize
