//import PrismaClient
const { PrismaClient } = require('@prisma/client');

//init prisma client
const prisma = new PrismaClient();

// Import validationResult from express-validator
const { validationResult } = require("express-validator");

//function findPosts
const findPosts = async (req, res) => {
    try {

        //get all posts from database
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        //send response
        res.status(200).send({
            success: true,
            message: "Get All Posts Successfully",
            data: posts,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

//function createPost
const createPost = async (req, res) => {

    // Periksa hasil validasi
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Jika ada error, kembalikan error ke pengguna
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    try {

        //insert data
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
            },
        });

        res.status(201).send({
            success: true,
            message: "Post Created Successfully",
            data: post,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

//export function
module.exports = {
    findPosts,  
    createPost,
}