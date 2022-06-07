import factoryAbi from "./abi/IPancakeFactory.json";
import pairAbi from "./abi/IPancakePair.json";
import router01Abi from "./abi/IPancakeRouter01.json";
import router02Abi from "./abi/IPancakeRouter02.json";

const contracts = {
    factory: {
        address: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
        abi: factoryAbi,
    },
    pair: {
        abi: pairAbi
    },
    router01: {
        address: "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
        abi: router01Abi,
    },
    router02: {
        address: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        abi: router02Abi
    }
}

export default contracts;