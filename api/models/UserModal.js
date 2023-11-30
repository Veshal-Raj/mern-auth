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
    role: {
      type: String,
      enum: ["Admin", "Customer"],
      default: "Customer",
    },
    profilePicture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fweb-profile.html&psig=AOvVaw33CvSCtjDBPQOIznVP39ED&ust=1701429739680000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOih9erN64IDFQAAAAAdAAAAABAe",
    },
    status: {
      type: String,
      default: "offline",
      enum: ["online", "offline"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
