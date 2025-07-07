# Markdown transformers

[**Lexical transformers**](https://lexical.dev/docs/packages/lexical-markdown#transformers) are the **bridge** between your WYSIWYG editor and markdown. They define how content is converted when **importing markdown** into the editor, and **exporting editor components** back to markdown.

## Types of Transformers

Lexical provides several types of transformers:

| Type                                                                                                                   | Use Case                                 |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [**`TextFormatTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#textformattransformer)             | Simple inline formatting with delimiters |
| [**`TextMatchTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#textmatchtransformer)               | Pattern-based component replacements     |
| [**`ElementTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#elementtransformer)                   | Single-line block elements               |
| [**`MultilineElementTransformer`**](https://lexical.dev/docs/api/modules/lexical_markdown#multilineelementtransformer) | Multi-line block elements                |

## Transformers Used in This Plugin

### Lexical's built-in transformers

This plugin uses the following built-in transformers from Lexical:

- Text format transformers:
  - Bold: [`BOLD_STAR`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L514), [`BOLD_UNDERSCORE`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L520)
  - Italic: [`ITALIC_STAR`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L533), [`ITALIC_UNDERSCORE`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L539)
  - Bold + Italic: [`BOLD_ITALIC_STAR`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L501), [`BOLD_ITALIC_UNDERSCORE`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L507)
  - Strikethrough: [`STRIKETHROUGH`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L527)
  - Inline code: [`INLINE_CODE`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L489)
- Text match transformer:
  - Link: [`LINK`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L550)
- Element transformers:
  - Headings: [`HEADING`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L321)
  - Quotes: [`QUOTE`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L338)
  - Lists: [`UNORDERED_LIST`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L459), [`ORDERED_LIST`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#479)
  - Check lists: [`CHECK_LIST`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L469)
- Multi-line transformer:
  - Block code: [`CODE`](https://github.com/facebook/lexical/blob/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L376)

### Custom transformers for docusaurus syntax

## Next Steps

- Create your [first custom transformer](./transformer-tutorial.mdx)
