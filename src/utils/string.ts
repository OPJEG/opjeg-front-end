export const shortenString = (str: string): string => {
  return `${str.substring(0, 6)}...${str.substring(
    str.length,
    str.length - 4
  )}`;
};
