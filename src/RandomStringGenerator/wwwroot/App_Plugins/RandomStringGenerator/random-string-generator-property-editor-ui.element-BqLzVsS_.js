import { LitElement as _, html as u, css as S, property as o, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as C } from "@umbraco-cms/backoffice/property-editor";
var M = Object.defineProperty, w = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, l = (e, t, r, h) => {
  for (var s = h > 1 ? void 0 : h ? w(t, r) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (s = (h ? p(t, r, s) : p(s)) || s);
  return h && s && M(t, r, s), s;
}, $ = (e, t, r) => t.has(e) || d("Cannot " + r), L = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), n = (e, t, r) => ($(e, t, "access private method"), r), a, m, f, v, y, x, g;
let i = class extends _ {
  constructor() {
    super(...arguments), L(this, a), this.value = "", this.maxLength = 32, this.errorMessage = "", this.selectedCharacterSets = ["Lowercase letters (a-z)"], this.characterOptions = {
      "Numeric digits (0-9)": "0123456789",
      "Uppercase letters (A-Z)": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "Lowercase letters (a-z)": "abcdefghijklmnopqrstuvwxyz",
      Symbols: "!@#$%^&*()_+{}|:\"<>?-= [];',./`~"
    };
  }
  render() {
    return u`
    <uui-label">character length</uui-label>
      <uui-input
        label="Length"
        placeholder="Enter length (max 32)"
        type="number"
        min="1"
        max="32"
        .value=${this.maxLength}
        @input=${n(this, a, v)}
        ?error=${this.errorMessage !== ""}
         style="width: 100px; margin-bottom: 10px;"
      ></uui-input>
      ${this.errorMessage ? u`<p style="color: red;">${this.errorMessage}</p>` : ""}

      <fieldset style="border: none; margin-left: -10px">
        <legend>Allowed Characters</legend>
        <ul style="list-style: none; margin-left: -30px;">
          ${Object.keys(this.characterOptions).map(
      (e) => u`
              <li>
                <uui-checkbox
                  .checked=${this.selectedCharacterSets.includes(e)}
                  @change=${n(this, a, f)}
                  value=${e}
                  label=${e}
                >
                  ${e}
                </uui-checkbox>
              </li>
            `
    )}
        </ul>
      </fieldset>

      <uui-input
        id="random-string-input"
        label="Random String"
        .value=${this.value || ""}
        @input=${n(this, a, m)}
         style="width: 300px;"
      ></uui-input>

      <div id="wrapper">
        <uui-button
          look="primary"
          label="Generate Random String"
          @click=${n(this, a, x)}
          ?disabled=${this.errorMessage !== ""}
          style="width: auto;"
        >
          Generate Random String
        </uui-button>
      </div>
    `;
  }
};
a = /* @__PURE__ */ new WeakSet();
m = function(e) {
  this.value = e.target.value, n(this, a, g).call(this);
};
f = function(e) {
  const t = e.target, r = t.value;
  t.checked ? this.selectedCharacterSets = [...this.selectedCharacterSets, r] : this.selectedCharacterSets = this.selectedCharacterSets.filter((h) => h !== r);
};
v = function(e) {
  const t = parseInt(e.target.value, 10);
  isNaN(t) || t < 1 ? (this.maxLength = 1, this.errorMessage = "Length must be at least 1") : t > 32 ? (this.maxLength = 32, this.errorMessage = "Max length is 32") : (this.maxLength = t, this.errorMessage = "");
};
y = function() {
  if (this.errorMessage) return;
  let e = this.selectedCharacterSets.map((t) => this.characterOptions[t]).join("");
  return e || (e = this.characterOptions["Lowercase letters (a-z)"]), Array.from(
    { length: this.maxLength },
    () => e.charAt(Math.floor(Math.random() * e.length))
  ).join("");
};
x = function() {
  this.errorMessage || (this.value = n(this, a, y).call(this), n(this, a, g).call(this));
};
g = function() {
  this.dispatchEvent(new C());
};
i.styles = S`
    #wrapper {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }
    .element {
      width: 100%;
    }
  `;
l([
  o({ type: String })
], i.prototype, "value", 2);
l([
  o({ type: Number })
], i.prototype, "maxLength", 2);
l([
  o({ type: String })
], i.prototype, "errorMessage", 2);
l([
  o({ type: Array })
], i.prototype, "selectedCharacterSets", 2);
i = l([
  b("my-random-string-generator")
], i);
export {
  i as default
};
//# sourceMappingURL=random-string-generator-property-editor-ui.element-BqLzVsS_.js.map
