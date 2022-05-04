const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

//  /api/thought

router.route("/").get(getAllThoughts).post(createThought);

//  /api/thought/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thought/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

//  /api/thought/:thoughtId/:reactioinId
router.route("/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
