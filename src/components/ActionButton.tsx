import { endpointBuilder, uriBuilder } from "../lib/utils";
import { NetworkSettings } from "../types/NetworkSettings";

type Props = {
  label: string;
  networkSettings: NetworkSettings;
  path: string;
};

export default function ActionButton({ label, networkSettings, path }: Props) {
  function triggerAction() {
    fetch(endpointBuilder(networkSettings, path), {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        console.log("Success!");
      } else {
        console.error("Error!");
      }
    });
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={triggerAction}
    >
      {label}
    </button>
  );
}
