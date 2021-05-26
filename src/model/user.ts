import mongoose, { Schema, Document } from "mongoose";

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export default mongoose.model<IUser>("User", UserSchema);
