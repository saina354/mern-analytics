// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"], // business roles only
    default: "employee"
  },
  department: { type: String },           // optional, for employee's department
  isActive: { type: Boolean, default: true } // block inactive users
});

export default mongoose.model("User", userSchema);
