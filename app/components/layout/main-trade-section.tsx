import React from "react";

const MainSection = () => {
  return (
    <section>
      <header>
        <h2>Trade Here Today: </h2>
        <p>Get yourself a trade and view tranasaction</p>
      </header>

      <div>
        <form>
          <label htmlFor="">
            <select name="tokenA" id="TokenA">
              <option value="xxx">xxx</option>
              <option value="eth">eth</option>
              <option value="usd">usd</option>
              <option value="wtbtc">wbtc</option>
            </select>
          </label>

          <hr />

          <label htmlFor="">
            <select name="tokenA" id="TokenA">
              <option value="xxx">xxx</option>
              <option value="eth">eth</option>
              <option value="usd">usd</option>
              <option value="wtbtc">wbtc</option>
            </select>
          </label>

          <div>
            <h2>Calculation:</h2>
            <p>Total: 100</p>
            <p>amount: 10</p>
            <button>submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MainSection;
