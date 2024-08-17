import React from "react";

const MainUserSection = () => {
  return (
    <section>
      <div>
        <header>
          <h2>Token Holdins:</h2>
        </header>

        <div>
          <span>Token:</span>
          <span>Amount:</span>
          <span>Price:</span>
          <span>Total:</span>
        </div>

        <div>
          <p>
            <span>BTC</span>
            <span>0.01</span>
            <span>50141</span>
            <span>$200</span>
          </p>
          <p>
            <span>ETH</span>
            <span>0.1</span>
            <span>5141</span>
            <span>$150</span>
          </p>
          <p>
            <span>SHIB</span>
            <span>1000</span>
            <span>.041</span>
            <span>$400</span>
          </p>
        </div>
      </div>

      <article>
        <header>
          <h2>Transcations:</h2>
        </header>
        <div>
          <span>Tranasction Hash:</span>
          <span>addressOne:</span>
          <span>addressOne:</span>
          <span>amount:</span>
          <span>date:</span>
        </div>

        <div>
          <p>
            <span>03cwcno2g24b4rb</span>
            <span>0x12rf323f</span>
            <span>0x1rf2ewv34vn</span>
            <span>200</span>
            <span>4-17-21</span>
          </p>
          <p>
            <span>{crypto.randomUUID().slice(0, 16)}</span>
            <span>0x1rf2ewv34vn</span>
            <span>0x1rf2ewv34vn</span>
            <span>150</span>
            <span>4-17-21</span>
          </p>
          <p>
            <span>03cwcno2g24b4rb03cwcno2g24b4rb</span>
            <span>0x1rf2ewv34vn</span>
            <span>.0x1rf2ewv34vn</span>
            <span>400</span>
            <span>4-17-21</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default MainUserSection;
