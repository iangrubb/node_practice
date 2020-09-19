const { Router } = require('express')

const router = Router()

const PostsController = require('./controllers/posts')



router.get('/posts', PostsController.indexRoute)
router.post('/posts', PostsController.createRoute)


module.exports = router