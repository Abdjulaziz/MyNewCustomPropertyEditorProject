export const manifests: Array<UmbExtensionManifest> = [
  {
    "alias": "My.PropertyEditorUi.Suggestions",
    "name": "My Suggestions Property Editor UI",
    "type": "propertyEditorUi",
    element: () => import("./suggestions-property-editor-ui.element"),
    "meta": {
      "label": "Suggestions",
      "icon": "icon-list",
      "group": "common",
      "propertyEditorSchemaAlias": "Umbraco.Plain.String"
    }
  }
];
