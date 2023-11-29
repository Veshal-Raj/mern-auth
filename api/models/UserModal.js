import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fprofile&psig=AOvVaw0EHgwAAfVyL3K5X4-EfL5x&ust=1701316453591000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMi0xOmn6IIDFQAAAAAdAAAAABAE',
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
