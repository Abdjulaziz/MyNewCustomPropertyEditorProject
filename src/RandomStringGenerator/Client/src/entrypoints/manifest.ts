export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Random String Generator Entrypoint",
    alias: "RandomStringGenerator.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];
