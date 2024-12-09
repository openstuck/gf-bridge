export function uriToHttp(uri: string): string[] {
  const protocol = uri.split(":")[0].toLowerCase();
  switch (protocol) {
    case "https":
      return [uri];
    case "http":
      return [`https${uri.substr(4)}`, uri];

    default:
      return [];
  }
}

export default function useHttpLocations(uri: string | undefined): string[] {
  return uri ? uriToHttp(uri) : [];
}
