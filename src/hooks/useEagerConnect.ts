import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

import { injected } from "../constants/connectors";

export const useEagerConnect = () => {
  const { active, activate } = useWeb3React();

  const [tried, setTried] = useState<boolean>(false);

  // try activate injected connector
  useEffect(() => {
    if (!active) {
      injected.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
          activate(injected, undefined, false).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      });
    }
  }, [activate]);

  // if the connection works, flip the flag
  useEffect(() => {
    if (active && !tried) {
      setTried(true);
    }
  }, [active, tried]);

  return tried;
};
