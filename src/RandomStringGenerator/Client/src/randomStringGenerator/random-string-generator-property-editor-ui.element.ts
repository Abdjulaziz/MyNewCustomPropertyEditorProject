import { LitElement, css, html, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/property-editor";
import { UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";

@customElement("my-random-string-generator")
export default class MyRandomStringGenerator extends LitElement implements UmbPropertyEditorUiElement {
  @property({ type: String }) public value = "";
  @property({ type: Number }) maxLength = 32;
  @property({ type: String }) errorMessage = "";
  @property({ type: Array }) private selectedCharacterSets: string[] = ["Lowercase letters (a-z)"];

  characterOptions = {
    "Numeric digits (0-9)": "0123456789",
    "Uppercase letters (A-Z)": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "Lowercase letters (a-z)": "abcdefghijklmnopqrstuvwxyz",
    "Symbols": "!@#$%^&*()_+{}|:\"<>?-= [];',./`~",
  };

  #onInput(e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value;
    this.#dispatchChangeEvent();
  }

  #onCheckboxChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    if (target.checked) {
      this.selectedCharacterSets = [...this.selectedCharacterSets, value];
    } else {
      this.selectedCharacterSets = this.selectedCharacterSets.filter((set) => set !== value);
    }
  }

  #onLengthChange(e: InputEvent) {
    const length = parseInt((e.target as HTMLInputElement).value, 10);
    if (isNaN(length) || length < 1) {
      this.maxLength = 1;
      this.errorMessage = "Length must be at least 1";
    } else if (length > 32) {
      this.maxLength = 32;
      this.errorMessage = "Max length is 32";
    } else {
      this.maxLength = length;
      this.errorMessage = "";
    }
  }

  #generateRandomString() {
    if (this.errorMessage) return;

    let characterPool = this.selectedCharacterSets
      .map((set) => this.characterOptions[set as keyof typeof this.characterOptions])
      .join("");

    if (!characterPool) characterPool = this.characterOptions["Lowercase letters (a-z)"];

    return Array.from({ length: this.maxLength }, () =>
      characterPool.charAt(Math.floor(Math.random() * characterPool.length))
    ).join("");
  }

  #onGenerate() {
    if (!this.errorMessage) {
      this.value = this.#generateRandomString()!;
      this.#dispatchChangeEvent();
    }
  }

  #dispatchChangeEvent() {
    this.dispatchEvent(new UmbPropertyValueChangeEvent());
  }

  render() {
    return html`
    <uui-label">Charecter legth</uui-label>
      <uui-input
        label="Length"
        placeholder="Enter length (max 32)"
        type="number"
        min="1"
        max="32"
        .value=${this.maxLength}
        @input=${this.#onLengthChange}
        ?error=${this.errorMessage !== ""}
         style="width: 100px; margin-bottom: 10px;"
      ></uui-input>
      ${this.errorMessage ? html`<p style="color: red;">${this.errorMessage}</p>` : ""}

      <fieldset style="border: none; margin-left: -10px">
        <legend>Allowed Characters</legend>
        <ul style="list-style: none; margin-left: -30px;">
          ${Object.keys(this.characterOptions).map(
      (key) => html`
              <li>
                <uui-checkbox
                  .checked=${this.selectedCharacterSets.includes(key)}
                  @change=${this.#onCheckboxChange}
                  value=${key}
                  label=${key}
                >
                  ${key}
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
        @input=${this.#onInput}
         style="width: 300px;"
      ></uui-input>

      <div id="wrapper">
        <uui-button
          look="primary"
          label="Generate Random String"
          @click=${this.#onGenerate}
          ?disabled=${this.errorMessage !== ""}
          style="width: auto;"
        >
          Generate Random String
        </uui-button>
      </div>
    `;
  }

  static styles = css`
    #wrapper {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }
    .element {
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-random-string-generator": MyRandomStringGenerator;
  }
}
