"use server";

import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "./session";
import { cookies } from "next/headers";
import dbConnect from "./db";
import { User } from "./models/User";
import { hash } from "bcrypt";

// token and session actions
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

// Login
const handleLogin = async () => {};

// Register
export const handleRegister = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  console.log("HANDLING REGISERRRR");
  try {
    console.log(data);
    
    await dbConnect();
    
    const userExist = await User.find({ metaAddress: data.metaAddress as string });
    console.log(userExist);

    if (userExist) {
      return {
        status: "error",
        payload:
          "user exists create another account with different credentials please",
      };
    }

    const hashPass = await hash(data.password as string, 10);

    const newUser = new User({
      username: data.username as string,
      email: data.userEmail as string,
      password: hashPass,
      metaAddress: data.metaAddress as string,
      signature: data.signature as string,
    });

    await newUser.save();

    return {
      status: "success",
      payload: "",
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};
