const { truncateSync } = require("fs");
const { Schema, model } = require("mongoose");
const { stringify } = require("querystring");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
        "Please fill a valid email address",
      ],
    },
    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);
module.exports = User;
