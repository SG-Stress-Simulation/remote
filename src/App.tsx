import { useState } from "react";
import ActionButton from "./components/ActionButton";
import AvailabilityTest from "./components/AvailabilityTest";
import NetworkSettingsForm from "./components/NetworkSettingsForm";
import { NetworkSettings } from "./types/NetworkSettings";

function App() {
  const [networkSettings, setNetworkSettings] = useState<NetworkSettings>({
    address: "localhost",
    port: 5555,
  });

  return (
    <div className="flex flex-col">
      <div className="p-2 bg-slate-300">
        <AvailabilityTest networkSettings={networkSettings} />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <ActionButton
          label="Vignette"
          networkSettings={networkSettings}
          path="StartVignette"
        />
        <ActionButton
          label="Depth of Field"
          networkSettings={networkSettings}
          path="StartDOF"
        />
        <ActionButton
          label="Color Loss"
          networkSettings={networkSettings}
          path="StartColorLoss"
        />
      </div>
    </div>
  );
}

export default App;
