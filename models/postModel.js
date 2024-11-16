const { mongoose, Schema } = require("mongoose");
const postSchema = new Schema[
  {
    title: { type: String, required: true },
    postedUserImage: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timeStamps: true }
];

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
