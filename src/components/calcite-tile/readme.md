# calcite-tile

<!-- Auto Generated Below -->

## Usage

### Basic

```html
<calcite-tile
  description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collab on thinking to further the overall."
  heading="Tile heading lorem ipsum"
  href="#"
  icon="images"
></calcite-tile>
```

## Properties

| Property      | Attribute     | Description                                                                                              | Type      | Default     |
| ------------- | ------------- | -------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`      | `active`      | The active state of the tile.                                                                            | `boolean` | `false`     |
| `description` | `description` | The description text that appears beneath the heading of the tile.                                       | `string`  | `undefined` |
| `disabled`    | `disabled`    | When true, prevents interaction.                                                                         | `boolean` | `false`     |
| `embed`       | `embed`       | The embed mode of the tile. When true, renders without a border and padding for use by other components. | `boolean` | `false`     |
| `heading`     | `heading`     | The heading text that appears between the icon and description of the tile.                              | `string`  | `undefined` |
| `hidden`      | `hidden`      | The hidden state of the tile.                                                                            | `boolean` | `false`     |
| `href`        | `href`        | The (optional) url for the tile. (Only applies when embed is set to false)                               | `string`  | `undefined` |
| `icon`        | `icon`        | The icon that appears at the top of the tile.                                                            | `string`  | `undefined` |

## Slots

| Slot              | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `"content-end"`   | A slot for adding non-actionable elements after the tile content.  |
| `"content-start"` | A slot for adding non-actionable elements before the tile content. |

## Dependencies

### Used by

- [calcite-tile-select](../calcite-tile-select)

### Depends on

- [calcite-icon](../calcite-icon)
- [calcite-link](../calcite-link)

### Graph

```mermaid
graph TD;
  calcite-tile --> calcite-icon
  calcite-tile --> calcite-link
  calcite-link --> calcite-icon
  calcite-tile-select --> calcite-tile
  style calcite-tile fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
