import { Component, Host, h, State } from "@stencil/core";
import { Status } from "../interfaces";

@Component({
  tag: "jupe-label-bug",
  shadow: true
})
export class JupeLabelWrapper {
  @State() status: Status = "idle";

  handleButtonClick(): void {
    this.status = "invalid" as Status;
  }

  render() {
    return (
      <Host>
        <calcite-label status="invalid">
          First
          <calcite-input value="Michael" />
          <calcite-input-message active icon>
            The label containing this calcite-input and calcite-input-message has the status
            attribute hard coded to `invalid`.
          </calcite-input-message>
        </calcite-label>
        <calcite-label status={this.status}>
          Last
          <calcite-input value="Juniper" />
          <calcite-input-message active icon>
            The label containing this calcite-input and calcite-input-message has the status
            attribute initally set to `idle` but clicking the button below will update it to
            `invalid`.
          </calcite-input-message>
        </calcite-label>
        <calcite-button onClick={this.handleButtonClick.bind(this)}>make invalid</calcite-button>
      </Host>
    );
  }
}
