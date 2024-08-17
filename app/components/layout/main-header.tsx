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


  const isLogged = false;

  return (
    <header className="flex items-center justify-between p-4 w-full bg-[#111] drop-shadow-lg rounded relative">
      <h1 className="text-2xl my-2">ParaboleHandleWatch</h1>

      <button
        onClick={handleLogin}
        className={`absolute p-2 bg-green-500 font-bold hover:bg-emerald-500 rounded drop-shadow-lg -top-5 left-0 ${
          isLogged ? "hidden" : "block"
        }`}
      >
        Login
      </button>
      <button
        onClick={handleRegister}
        className={`absolute p-2 bg-yellow-500 text-black font-bold hover:bg-yellow-300 rounded drop-shadow-lg -top-5 right-0 ${
          isLogged ? "hidden" : "block"
        }`}
      >
        Register
      </button>

      {isLogged && (
        <div className="w-[30%] p-3 flex items-center justify-around">
          <h2>username:</h2>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
