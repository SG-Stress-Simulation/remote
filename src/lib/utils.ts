import { NetworkSettings } from "../types/NetworkSettings";

export function uriBuilder(NetworkSettings: NetworkSettings): string {
  const { address, port } = NetworkSettings;
  return `http://${address}:${port}/`;
}

export function endpointBuilder(
  NetworkSettings: NetworkSettings,
  path: string
): string {
  return `${uriBuilder(NetworkSettings)}${path}`;
}
