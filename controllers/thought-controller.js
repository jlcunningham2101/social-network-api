const { Thought } = require("../models");

const thoughtController = {
  // the functions will go in here as methods
  
  // GET all thoughts
  getAllThought(req, res) {
    Thought.find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET to get a single thought by its _id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        // If no thought is found, send 404
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)//
createThought({ body }, res) {
  Thought.create(body)
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.status(400).json(err));
},

// PUT to update a thought by its _id//
updateThought({ params, body }, res) {
  Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
},

// DELETE to remove a thought by its _id//
deleteThought({ params }, res) {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
}

module.exports = thoughtController;
