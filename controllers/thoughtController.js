const Thought = require("../models/Thought");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find;
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const singleThought = await Thought.findById(req.params.id);
      res.json(singleThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      const user = await User.findById(req.body.userId);
      user.thoughts.push(dbThoughtData._id);
      await user.save();
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const dbThoughtData = await Thought.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const dbThoughtData = await Thought.findByIdAndDelete(req.params.id);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const dbReactionData = await Thought.findByIdAndUpdate(
        req.params.id,
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.json(dbReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const dbReactionData = await Thought.findByIdAndUpdate(
        req.params.id,
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true }
      );
      res.json(dbReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
