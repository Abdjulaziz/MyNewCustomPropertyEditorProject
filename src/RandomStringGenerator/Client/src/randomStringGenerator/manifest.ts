export const manifests: Array<UmbExtensionManifest> = [
  {
    "alias": "My.PropertyEditorUi.Random-String-Generator",
    "name": "My Random String Generator Property Editor UI",
    "type": "propertyEditorUi",
    element: () => import("./random-string-generator-property-editor-ui.element"),
    "meta": {
      "label": "Random String Generator",
      "icon": "icon-code",
      "group": "common",
      "propertyEditorSchemaAlias": "Umbraco.Plain.String"
    }
  }
];
