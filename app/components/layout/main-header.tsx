"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { toast } from "react-toastify";

const MainHeader = () => {
  const { onOpen } = useModal();

  const handleLogin = async () => {
    try {
      console.log("handlingn login");

      onOpen("signUserIn");
    } catch (error) {
      console.log("error logging user in client header", error);
      toast("OPPPSSSSSs errorrr in main header");
    }
  };

  const handleRegister = async () => {
    try {
      console.log("handlingn reg");

      onOpen("registerUser");
    } catch (error) {
      console.log("error logging user in client header", error);
      toast("OPPPSSSSSs errorrr in main header");
    }
  };

  return (
    <header className="flex items-center justify-between p-2 w-full">
      <h1 className="text-2xl">ParaboleHandleWatch</h1>

      <div className="w-[30%] p-3 flex items-center justify-around">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </header>
  );
};

export default MainHeader;
