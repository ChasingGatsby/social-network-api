const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: String,
    createdAt: Date,
    username: String,
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);