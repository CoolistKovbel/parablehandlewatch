import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

import { ethers } from "ethers";
import {
  CurrencyAmount,
  Currency,
  Percent,
  Token,
  TradeType,
  SUPPORTED_CHAINS,
} from "@uniswap/sdk-core";
import {
  Pool,
  Route,
  SwapOptions,
  SwapQuoter,
  SwapRouter,
  Trade,
  computePoolAddress,
} from "@uniswap/v3-sdk";
import JSBI from "jsbi";
import { CurrentConfig } from "@/config";

interface PoolInfo {
  token0: string;
  token1: string;
  fee: number;
  tickSpacing: number;
  sqrtProiceX96: ethers.BigNumber;
  liquidity: ethers.BigNumber;
  tick: number;
}

// Constant variables
const MAX_FEE_PER_FAS = 100000000000;
const MAC_PRRIORITY_FEE_PER_GAS = 100000000000;
const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = 2000;

// ------ address
const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const QUORTER_CONTRACT_ADDRESS = "0x61fFE014bA17989E743c5F6cB21bF9697530B21e";
const SWAP_ROUTER_ADDRESS = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
const WETH_CONTRACT_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const USDC_CONTRACT_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

// ------ tokens
export const WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[0], // mainnet
  WETH_CONTRACT_ADDRESS,
  18,
  "WETH",
  "Wrapped Ether"
);

export const USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[0], // mainnet
  USDC_CONTRACT_ADDRESS,
  6,
  "USDC",
  "USD//C"
);

export const WETH_ABI = [
  // wrapped eth
  "function deposit() payable",
  // unwrapped eth
  "function withdraw(uint wad) public",
];

export const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",

  "function transfer(address recipient, uint256 amount) returns (bool) ",
  "function approve(address spender, uint256 amount) returns (bool) ",

  "event Transfer(address from, address to, uint256 value)",
];

// ether extentions:::::::
const mainnetProvider = new ethers.providers.JsonRpcProvider(CurrentConfig.rpc.mainnet)




// routes

export async function getPoolInfo(): Promise<PoolInfo> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: CurrentConfig.tokens.in,
    tokenB: CurrentConfig.tokens.out,
    fee: CurrentConfig.tokens.poolFee,
  });

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    IUniswapV3PoolABI.abi,
    provider
  );

  const [token0, token1, fee, tickSpacing, liquidity, slote0] =
    await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
      poolContract.tickSpacing(),
      poolContract.liquidity(),
      poolContract.slote0(),
    ]);

  return {
    token0,
    token1,
    fee,
    tickSpacing,
    liquidity,
    sqrtProiceX96: slote0[0],
    tick: slote0[1],
  };
}

// Create Trade function

export async function createTrade() {
    
    const poolInfo = await getPoolInfo()

    const pool = new Pool(
        CurrentConfig.tokens.in,
        CurrentConfig.tokens.out,
        CurrentConfig.tokens.poolFee,
        poolInfo.sqrtProiceX96.toString(),
        poolInfo.liquidity.toString(),
        poolInfo.tick
    )

    const swapRoute = new Route(
        [pool],
        CurrentConfig.tokens.in,
        CurrentConfig.tokens.out
    )


}

async function getOutputQuote(route:any) {

}


// Execute Trade function
