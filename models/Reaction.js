const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const thoughtSchema = require("./Thought");

const ReactionSchema = new Schema({
  reactionId: {},
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timer) => dateFormat(timer),
  },
  toJSON: {
    virtuals: true,
    getters: true,
  },
});

/*ReactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Reaction = model("Reaction", ReactionSchema);
*/

module.exports = Reaction;
