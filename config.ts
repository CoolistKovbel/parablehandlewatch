enum Enviroment {
  "development",
  "production",
}

type ConfigCurrent = {
  env: Enviroment;
  rpc: {
    local: string;
  };
};

// Finish the config
export const CurrentConfig:any = {
  env: "DEV",
  rpc: {
    local: "",
    mainnet: "",
  },
  wallet: {
    address: "",
    prvKey: "",
  },
  tokens: {
    in: "",
    amountIn: 1,
    out: "",
    poolFee: "",
  },
};
