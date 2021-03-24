const Post = require("../models/userPostModel");

module.exports = {
  newPost: async (req, res) => {
    try {
      const newPost = new Post({
        title: req.body.title,
        text: req.body.text,
        authorId: req.user,
      });
      await newPost.save();
      const findPost = await Post.find({});
      res.json(findPost);
    } catch (err) {
      res.status("error saving: ", err);
    }
  },

  getUserPost: async (req, res) => {
    try {
      const allPosts = await Post.find({ authorId: req.user });
      res.json(allPosts);
    } catch (err) {
      res.send("cannot get posts", err);
    }
  },

  deleteUserPost: async (req, res) => {
    try {
      const deletePost = await Post.findOneAndDelete({ authorId: req.user });
      res.json(deletePost);
    } catch (err) {
      res.send(err);
    }
  },

  updateUserPost: async (req, res) => {
    console.log("before:", req.body);
    try {
      const updatePost = await Post.findByIdAndUpdate(
        { _id: req.body._id },
        req.body
      );
      const findPost = await Post.find({ _id: req.body._id });
      console.log("findPost:", findPost);
      console.log("UpdatedPost:", updatePost);
      res.json(findPost);
    } catch (err) {
      console.log(err);
    }
  },
};
