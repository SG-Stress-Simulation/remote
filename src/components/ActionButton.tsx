import { endpointBuilder, uriBuilder } from "../lib/utils";
import { NetworkSettings } from "../types/NetworkSettings";

type Props = {
  label: string;
  path: string;
  inifinite?: boolean;
  duration?: number;
  intensity?: number;
  style?: "normal" | "danger";
  actionWithoutParams?: boolean;
};

export default function ActionButton({
  label,
  path,
  style = "normal",
  inifinite = false,
  duration = 10,
  intensity = 0.75,
  actionWithoutParams = false,
}: Props) {
  function requestUriBuilder() {
    const uri = `/${path}?infinite=${encodeURIComponent(
      inifinite
    )}&duration=${encodeURIComponent(duration)}&intensity=${encodeURIComponent(
      intensity
    )}`;
    console.log(uri);
    return uri;
  }

  function triggerAction() {
    fetch(actionWithoutParams ? `/${path}` : requestUriBuilder(), {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        console.log("Success!");
      } else {
        console.error("Error!");
      }
    });
  }

  function selectStyle() {
    switch (style) {
      case "normal":
        return "bg-blue-500 hover:bg-blue-700";
      case "danger":
        return "bg-red-500 hover:bg-red-700";
    }
  }

  return (
    <button
      className={`${selectStyle()} text-white font-bold py-2 px-4 rounded`}
      onClick={triggerAction}
    >
      {label}
    </button>
  );
}
