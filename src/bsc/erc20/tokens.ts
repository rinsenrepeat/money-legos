import ERC20Abi from "./abi/ERC20.json";
import WETHAbi from "./abi/ERC20.json";

const tokens = {
    bnb: {
        symbol: "BNB",
        decimals: 18,
    },
    wbnb: {
        symbol: "WBNB",
        decimals: 18,
        address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        abi: WETHAbi
    },
    bat: {
        symbol: "BAT",
        decimals: 18,
        address: "0x101d82428437127bF1608F699CD651e6Abf9766E",
        abi: ERC20Abi
    },
    dai: {
        symbol: "DAI",
        decimals: 18,
        address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        abi: ERC20Abi
    },
    usdt: {
        symbol: "BSC-USD",
        decimals: 18,
        address: "0x55d398326f99059fF775485246999027B3197955",
        abi: ERC20Abi
    },
    usdc: {
        symbol: "USDC",
        decimals: 18,
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        abi: ERC20Abi,
    },
    weth: {
        symbol: "WETH",
        decimals: 18,
        address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        abi: WETHAbi,
    },
    btbc: {
        symbol: "BTCB",
        decimals: 8,
        address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        abi: ERC20Abi,
    }
};

export default tokens;