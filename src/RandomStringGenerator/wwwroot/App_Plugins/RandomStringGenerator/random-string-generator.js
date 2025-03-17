const t = [
  {
    name: "Random String Generator Entrypoint",
    alias: "RandomStringGenerator.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DhJLPN2f.js")
  }
], o = [
  {
    name: "Random String Generator Dashboard",
    alias: "RandomStringGenerator.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-Dyl7lc2f.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], a = [
  {
    alias: "My.PropertyEditorUi.Suggestions",
    name: "My Suggestions Property Editor UI",
    type: "propertyEditorUi",
    element: () => import("./suggestions-property-editor-ui.element-0f25THSi.js"),
    meta: {
      label: "Suggestions",
      icon: "icon-list",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Plain.String"
    }
  }
], n = [
  ...t,
  ...o,
  ...a
];
export {
  n as manifests
};
//# sourceMappingURL=random-string-generator.js.map
