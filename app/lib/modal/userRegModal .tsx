"use client";

import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useModal } from "@/app/hooks/use-modal-store";

const UserRegModel = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const [currentUser, setCurrerntUser] = useState<any>(""); // metaAddress
  const fm = signature;

  const isModalOpen = isOpen && type === "registerUser";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const form = e.target as HTMLFormElement;

      // Accessing form elements using the `elements` property

      const message = `You are the current account holder signing today`;
      const signature = await signer.signMessage(message);

      const payload = {
        signature,
        username: fm,
      };

      console.log(payload);

      router.refresh();

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gh = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const address = await signer.getAddress();

      setCurrerntUser(address);
    };

    gh();
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>

          <label className="block mb-2" htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2" htmlFor="userEmail">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2" htmlFor="userPassword">
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2" htmlFor="metaAddress">
            <input
              type="text"
              name="metaAddress"
              id="metaAddress"
              value={currentUser}
              onChange={(e: any) => setCurrerntUser(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Sign
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
          
        </form>
      </dialog>
    </div>
  );
};

export default UserRegModel;
