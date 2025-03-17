const a = [
  {
    name: "Random String Generator Entrypoint",
    alias: "RandomStringGenerator.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DhJLPN2f.js")
  }
], n = [
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
], t = [
  ...a,
  ...n
];
export {
  t as manifests
};
//# sourceMappingURL=random-string-generator.js.map
