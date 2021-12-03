import { Component, h } from "@stencil/core";

@Component({
  tag: "jupe-popover-bug",
  styleUrl: "jupe-popover-bug.css",
  shadow: true
})
export class JupePopoverBug {
  render() {
    return (
      <calcite-popover-manager auto-close>
        <calcite-input value="#00ff00">
          <calcite-button appearance="outline" id="color-picker-toggle-button" slot="action">
            <div class="swatch" style={{ "background-color": "#00ff00" }}>
              &nbsp;
            </div>
          </calcite-button>
        </calcite-input>
        <calcite-popover
          disablePointer={true}
          label="color picker"
          placement="auto"
          referenceElement="color-picker-toggle-button"
        >
          <calcite-color-picker allow-empty="true" format="hex" scale="m" value="#00ff00" />
        </calcite-popover>
      </calcite-popover-manager>
    );
  }
}
