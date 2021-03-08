const router = require('express').Router()
const {User} = require('../db/models')
const adminCheck = require('../adminCheck')
module.exports = router

router.get('/', adminCheck, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', adminCheck, async (req, res, next) => {
  try {
    const {id} = req.params
    const singleUser = await User.findByPk(id)
    res.json(singleUser)
  } catch (error) {
    next(error)
  }
})
