const { Schema, model, SchemaTypes } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  friends: {
    type: [{ type: SchemaTypes.ObjectId, ref: "User" }],
    default: [],
  },
  enemies: {
    type: [{ type: SchemaTypes.ObjectId, ref: "User" }],
    default: [],
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
