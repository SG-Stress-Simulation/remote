import React from "react";
import { NetworkSettings } from "../types/NetworkSettings";

type Props = {
  networkSettings: NetworkSettings;
  setNetworkSettings: React.Dispatch<React.SetStateAction<NetworkSettings>>;
};

export default function NetworkSettingsForm({
  networkSettings,
  setNetworkSettings,
}: Props) {
  const [address, setAddress] = React.useState(networkSettings.address);
  const [port, setPort] = React.useState(networkSettings.port);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNetworkSettings({ address, port });
  }

  return (
    <div className="flex flex-col gap-2 p-2">
      <form onSubmit={onSubmit}>
        <label className="text-gray-700" htmlFor="address">
          Address
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label className="text-gray-700" htmlFor="port">
          Port
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="number"
          id="port"
          value={port}
          onChange={(e) => setPort(parseInt(e.target.value))}
        />
        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
