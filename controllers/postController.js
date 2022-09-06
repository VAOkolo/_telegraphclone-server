const Post = require('../models/postModel')

const getPosts = async (req, res) => {
    const Posts = await Post.find()
    .sort({createdAt:-1})

    res.status(200).json(Posts)
}

const createPost = async (req, res) => {
    const { title, alias, description, date } = req.body
    
    try {
        const post = await Post.create({title, alias, description, date})
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getPostById = async (req, res) => {

    const { id } = req.params
    try{
        const post = await Post.findById({_id: id})
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const updatePost = async (req, res) => {

    const { id } = req.params
    try {
        const post = await Post.findOneAndUpdate({_id: id}, {...req.body})
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const deletePost = async (req, res) => {

    const { id } = req.params
    try {
        const post = await Post.deleteOne({_id: id})
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = { getPosts, createPost, getPostById, updatePost, deletePost }

