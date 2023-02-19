import React, { useEffect } from "react";
import { endpointBuilder } from "../lib/utils";
import { NetworkSettings } from "../types/NetworkSettings";

type Props = {
  networkSettings: NetworkSettings;
};

export default function AvailabilityTest({ networkSettings }: Props) {
  const [availability, setAvailability] = React.useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Checking availability");
      fetch(endpointBuilder(networkSettings, "Health"))
        .then((response) => {
          if (response.status === 200) {
            setAvailability(true);
          } else {
            setAvailability(false);
          }
        })
        .catch(() => {
          setAvailability(false);
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (availability) {
    return <b>Available</b>;
  } else {
    return <b>Not Available</b>;
  }
}
