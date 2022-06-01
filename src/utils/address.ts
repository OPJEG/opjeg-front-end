import { utils } from "ethers";

import { shortenString } from "./string";

export const shortenAddress = (address: string): string => {
  try {
    const addr = utils.getAddress(address);
    return shortenString(addr);
  } catch {
    throw new TypeError("invalid address");
  }
};
