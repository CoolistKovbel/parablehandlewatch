import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  metaAddress: string;
  signature: string;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    
    metaAddress: {
      type: String || null,
      unique: true
    },
    signature: {
      type: String || null,
      unique: true
    },
    
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
