import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain at least 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain at least 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a vaild e-mail"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be 10-Digits"],
    maxLength: [10, "Phone number must be 10-Digits"],
  },
  uid: {
    type: String,
    required: true,
    minLength: [12, "UID must be 5-Digits"],
    maxLength: [12, "UID must be 5-Digits"],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Prefer Not Say"],
  },
  appointment_date: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});
export const Appointment = mongoose.model("Appointment", appointmentSchema);
