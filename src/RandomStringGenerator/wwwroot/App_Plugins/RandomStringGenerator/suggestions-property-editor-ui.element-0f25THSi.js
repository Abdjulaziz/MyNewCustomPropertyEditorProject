import { LitElement as d, html as m, css as _, property as y, state as f, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as b } from "@umbraco-cms/backoffice/property-editor";
var w = Object.defineProperty, x = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, p = (t, e, s, r) => {
  for (var i = r > 1 ? void 0 : r ? x(e, s) : e, u = t.length - 1, l; u >= 0; u--)
    (l = t[u]) && (i = (r ? l(e, s, i) : l(i)) || i);
  return r && i && w(e, s, i), i;
}, P = (t, e, s) => e.has(t) || h("Cannot " + s), C = (t, e, s) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), a = (t, e, s) => (P(t, e, "access private method"), s), n, v, c, g;
let o = class extends d {
  constructor() {
    super(...arguments), C(this, n), this.value = "", this._suggestions = [
      "You should take a break",
      "I suggest that you visit the Eiffel Tower",
      "How about starting a book club today or this week?",
      "Are you hungry?"
    ];
  }
  render() {
    return m`
            <uui-input
                id="suggestion-input"
                class="element"
                label="text input"
                .value=${this.value || ""}
                @input=${a(this, n, v)}
            >
            </uui-input>
            <div id="wrapper">
                <uui-button
                    id="suggestion-button"
                    class="element"
                    look="primary"
                    label="give me suggestions"
                    @click=${a(this, n, c)}
                >
                    Give me suggestions!
                </uui-button>
                <uui-button
                    id="suggestion-trimmer"
                    class="element"
                    look="outline"
                    label="Trim text"
                >
                    Trim text
                </uui-button>
            </div>
        `;
  }
};
n = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.value = t.target.value, a(this, n, g).call(this);
};
c = function() {
  const t = this._suggestions.length * Math.random() | 0;
  this.value = this._suggestions[t], a(this, n, g).call(this);
};
g = function() {
  this.dispatchEvent(new b());
};
o.styles = [
  _`
            #wrapper {
                margin-top: 10px;
                display: flex;
                gap: 10px;
            }
            .element {
                width: 100%;
            }
        `
];
p([
  y({ type: String })
], o.prototype, "value", 2);
p([
  f()
], o.prototype, "_suggestions", 2);
o = p([
  E("my-suggestions-property-editor-ui")
], o);
export {
  o as default
};
//# sourceMappingURL=suggestions-property-editor-ui.element-0f25THSi.js.map
