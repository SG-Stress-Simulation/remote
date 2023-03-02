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

  const [intensity, setIntensity] = useState(0.75);
  const [duration, setDuration] = useState(10);
  const [inifinite, setInfinite] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="p-2 bg-slate-300">
        <AvailabilityTest networkSettings={networkSettings} />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <ActionButton
          label="Vignette"
          path="StartVignette"
          intensity={intensity}
          duration={duration}
          inifinite={inifinite}
        />
        <ActionButton
          label="Depth of Field"
          path="StartDOF"
          intensity={intensity}
          duration={duration}
          inifinite={inifinite}
        />
        <ActionButton
          label="Color Loss"
          path="StartColorLoss"
          intensity={intensity}
          duration={duration}
          inifinite={inifinite}
        />
        <ActionButton
          style="danger"
          label="Stop All Effects"
          path="StopEffects"
          actionWithoutParams
        />
        <p className="font-bold">Intensity ({intensity * 100}%) </p>
        <input
          className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-300  range-lg  h-3 "
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={intensity}
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
        />
        <p className="font-bold">Duration ({duration} seconds)</p>
        <input
          className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-300  range-lg  h-3 "
          type="range"
          disabled={inifinite}
          min="1"
          max="60"
          step="1"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <div className="flex flex-row gap-2">
          <input
            className="w-8 h-8"
            type="checkbox"
            checked={inifinite}
            onChange={(e) => setInfinite(e.target.checked)}
          />
          <p className="font-bold">Infinite</p>
        </div>
      </div>
    </div>
  );
}

export default App;
