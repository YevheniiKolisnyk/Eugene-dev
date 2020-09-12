const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await Todo.find()
    res.status(200).json(tasks)
  } catch (e) {
    console.log(e)
  }
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const task = await new Todo({
      title: req.body.title,
      done: false
    }).save()
    res.status(201).json(task)
  } catch (e) {
    console.log(e)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const task = await Todo.findByIdAndUpdate(
        req.params.id,
        {$set: {done: req.body.done}},
        {new: true})
    res.status(200).json(task)
  } catch (e) {
    console.log(e)
  }
})


router.delete('/', async (req, res) => {
  try {
    const tasks = await Todo.deleteMany({done: true})
    res.status(200).json()
  } catch (e) {
    console.log(e)
  }
})
module.exports = router
