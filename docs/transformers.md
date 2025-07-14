# Lexical transformers

[**Lexical transformers**](https://lexical.dev/docs/packages/lexical-markdown#transformers) are the **bridge** between your WYSIWYG editor and markdown. They define how content is converted when **importing markdown** into the editor, and **exporting editor components** back to markdown.

## Types of Transformers

Lexical provides several types of transformers:

| Type                                                                                                                   | Use Case                                 |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [**`TextFormatTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#textformattransformer)             | Simple inline formatting with delimiters |
| [**`TextMatchTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#textmatchtransformer)               | Pattern-based component replacements     |
| [**`ElementTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#elementtransformer)                   | Single-line block elements               |
| [**`MultilineElementTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#multilineelementtransformer) | Multi-line block elements                |

## Transformers in this Plugin

You can find all the used transformers in the [`MarkdownTransformers`](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg/blob/feature/55-link/src/theme/plugins/MarkdownTransformers/index.ts) plugin.

### Lexical's built-in transformers

This plugin uses the following built-in transformers from Lexical:

- Text format transformers:
  - Bold: [`BOLD_STAR`](https://lexical.dev/docs/api/modules/lexical_markdown#bold_star), [`BOLD_UNDERSCORE`](https://lexical.dev/docs/api/modules/lexical_markdown#bold_underscore)
  - Italic: [`ITALIC_STAR`](https://lexical.dev/docs/api/modules/lexical_markdown#italic_star), [`ITALIC_UNDERSCORE`](https://lexical.dev/docs/api/modules/lexical_markdown#italic_underscore)
  - Bold + Italic: [`BOLD_ITALIC_STAR`](https://lexical.dev/docs/api/modules/lexical_markdown#bold_italic_star), [`BOLD_ITALIC_UNDERSCORE`](https://lexical.dev/docs/api/modules/lexical_markdown#bold_italic_underscore)
  - Inline code: [`INLINE_CODE`](https://lexical.dev/docs/api/modules/lexical_markdown#inline_code)
- Text match transformer:
  - Link: [`LINK`](https://lexical.dev/docs/api/modules/lexical_markdown#link)
- Element transformers:
  - Headings: [`HEADING`](https://lexical.dev/docs/api/modules/lexical_markdown#heading)
  - Quotes: [`QUOTE`](https://lexical.dev/docs/api/modules/lexical_markdown#quote)
- Multi-line transformer:
  - Block code: [`CODE`](https://lexical.dev/docs/api/modules/lexical_markdown#code)

### Custom transformers for Docusaurus markdown syntax

This plugin uses the following custom transformers :

- Text format transformers:
  - Strikethrough: `STRIKETHROUGH_DOUBLE`, `STRIKETHROUGH_SINGLE`
- Text match transformer:
  - Images: `IMAGE`
  - Equations: `EQUATION`
  - Links: `BOLD_LINK`, `ITALIC_LINK`, `BOLD_ITALIC_LINK`
- Element transformers:
  - Lists: `UNORDERED_LIST`, `ORDERED_LIST`
  - Check lists: `CHECK_LIST`
- Multi-line transformer:
  - Admonitions: `ADMONITION`

:::tip
If you build a custom transformer, don't forget to register it in the [`MarkdownTransformers`](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg/blob/feature/55-link/src/theme/plugins/MarkdownTransformers/index.ts) plugin too!
:::

## Learn More

- [Custom transformer tutorial](./transformer-tutorial.mdx)
- [Lexical Transformer API Reference](https://lexical.dev/docs/packages/lexical-markdown)
