//import PrismaClient
const { PrismaClient } = require('@prisma/client');

//init prisma client
const prisma = new PrismaClient();

//function find post
const findPost = async (req, res) => {
    try{
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
    }catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send({
            success: false,
            message: "Failed to fetch posts",
            error: error.message,
        });
    }
};

module.exports = {
    findPost,
};