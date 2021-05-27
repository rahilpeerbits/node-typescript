import mongoose, { Schema, Document } from "mongoose";

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  verified: { type: Boolean, required: true },
  emailToken: { type: String, required: false },
});

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  image: string;
  verified: boolean;
  emailToken: string;
}

export default mongoose.model<IUser>("User", UserSchema);
