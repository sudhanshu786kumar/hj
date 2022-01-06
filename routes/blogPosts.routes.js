import express from "express";
import {getAllBlogPosts,
        addBlogPost,
        getSingleBlogPost,
        updateSingleBlogPost,
        removeSingleBlogPost,
        likeBlogPost,} from '../controllers/blogPosts.controller.js';
const router = express.Router();


router.get("/",getAllBlogPosts);
router.post("/",addBlogPost);
router.get("/:id",getSingleBlogPost);
router.get("/:id",updateSingleBlogPost);
router.get("/:id",removeSingleBlogPost);
router.patch("/:id/likeedBlogPost",likeBlogPost);

export default router;