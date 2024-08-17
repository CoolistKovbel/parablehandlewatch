"use client";
import { useEffect, useState } from "react";
import AuthUserModel from "../lib/modal/userAuthModal";
import UserRegModel from "../lib/modal/userRegModal ";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthUserModel />
      <UserRegModel />
    </>
  );
};
