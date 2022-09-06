const express = require('express')
const { getPosts, createPost, getPostById, updatePost, deletePost } = require('../controllers/postController')

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.get('/:id', getPostById)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router
