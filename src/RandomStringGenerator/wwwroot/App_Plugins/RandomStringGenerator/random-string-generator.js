const t = [
  {
    name: "Random String Generator Entrypoint",
    alias: "RandomStringGenerator.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DhJLPN2f.js")
  }
], a = [
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
], n = [
  {
    alias: "My.PropertyEditorUi.Random-String-Generator",
    name: "My Random String Generator Property Editor UI",
    type: "propertyEditorUi",
    element: () => import("./random-string-generator-property-editor-ui.element-CU5nRpuH.js"),
    meta: {
      label: "Random String Generator",
      icon: "icon-code",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Plain.String"
    }
  }
], o = [
  ...t,
  ...a,
  ...n
];
export {
  o as manifests
};
//# sourceMappingURL=random-string-generator.js.map
