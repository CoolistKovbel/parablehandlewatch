"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

// Types
type CurrentStateType = {
  calcTotal: number;
  returnTokenAmount: number;
  tokenAmountA: number;
  tokenAmountB: number;
  tokenA: string;
  tokenB: string;
};

// Stte
const currentState: CurrentStateType = {
  calcTotal: 6,
  returnTokenAmount: 20,
  tokenAmountA: 0,
  tokenAmountB: 0,
  tokenA: "",
  tokenB: "",
};

const MainSection = () => {
  const [currentCalc, setCurrentCalc] =
    useState<CurrentStateType>(currentState);

  const isLogged = !true;

  const totalRef = useRef(currentCalc.calcTotal);
  const totalTokenRef = useRef(currentCalc.returnTokenAmount);

  // Handle Trade Submit
  const handleTrade = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      console.log("trading");

      console.log(formData);
    } catch (error) {
      console.log("Error", error);
      toast("error hanling swap");
    }
  };

  // handle input change
  const handleTradeChange = async (e: any) => {
    console.log(e);

    try {
      console.log("handling trade change");

      const { name, value } = e.target;

      setCurrentCalc({
        ...currentCalc,
        [name]: value,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Calcualte result
  const calculateResult = async () => {
    try {
      console.log("handle calculate");

      const result =
        Number(currentCalc.tokenAmountA) * Number(currentCalc.tokenAmountB);

      setCurrentCalc({ ...currentCalc, calcTotal: result });
    } catch (error) {
      console.log("error", error);
    }
  };

  // Update options dynamic
  //
  useEffect(() => {
    const gg = async () => {
      await calculateResult();
    };

    gg();
  }, [totalRef]);

  return (
    <section className="w-full">
      <header className="bg-[#222] p-4 rounded drop-shadow-lg">
        <h2 className="text-2xl font-bold">Trade Here Today: </h2>
        <p className="text-sm text-gray-500 p-1">
          Get yourself a trade and view tranasaction
        </p>
      </header>

      <div className="w-full">
        <form
          onSubmit={handleTrade}
          className="flex items-center justify-between gap-4"
        >
          <div className="w-[50%]">
            <div className="flex gap-4 p-4">
              <label htmlFor="tokenAmountA">
                <input
                  type="number"
                  name="tokenAmountA"
                  id="tokenAmountA"
                  className="bg-[#222] p-2"
                  onChange={(e) => handleTradeChange(e)}
                />
              </label>

              <label htmlFor="tokenA">
                <select
                  name="tokenA"
                  id="tokenA"
                  className="bg-[#222] p-2"
                  onChange={(e) => handleTradeChange(e)}
                >
                  <option value="xxx">xxx</option>
                  <option value="eth">eth</option>
                  <option value="usd">usd</option>
                  <option value="wtbtc">wbtc</option>
                </select>
              </label>
            </div>

            <hr />

            <div className="flex gap-4 p-4">
              <label htmlFor="tokenAmountB">
                <input
                  type="number"
                  name="tokenAmountB"
                  id="tokenAmountB"
                  className="bg-[#222] p-2"
                  onChange={(e) => handleTradeChange(e)}
                />
              </label>

              <label htmlFor="tokenB">
                <select
                  name="tokenB"
                  id="TokenB"
                  className="bg-[#222] p-2"
                  onChange={(e) => handleTradeChange(e)}
                >
                  <option value="xxx">xxx</option>
                  <option value="eth">eth</option>
                  <option value="usd">usd</option>
                  <option value="wtbtc">wbtc</option>
                </select>
              </label>
            </div>
          </div>

          <div className="w-[30%]">
            <h2>Calculation:</h2>
            <p>Total: {totalRef.current}</p>
            <p>amount: {totalTokenRef.current}</p>
            <button
              className="bg-[#444] p-2 rounded drop-shadow-lg hover:bg-[#666] font-bold"
              disabled={isLogged}
            >
              {isLogged ? "login" : "submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MainSection;
