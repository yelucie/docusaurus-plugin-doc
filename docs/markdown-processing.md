
## Understanding Transformer Types

Based on the [Lexical markdown API](https://lexical.dev/docs/api/modules/lexical_markdown), there are four types of transformers:

- [**Text format transformer**](https://lexical.dev/docs/api/modules/lexical_markdown#textformattransformer) for simple text formatting (bold, italic, underline, strikethrough, code, etc.)
- [**Text match transformer**](https://lexical.dev/docs/api/modules/lexical_markdown#textmatchtransformer) for pattern-based replacements (links, inline code, equations, etc.)
- [**Element transformer**](https://lexical.dev/docs/api/modules/lexical_markdown#elementtransformer) for single-line block elements (list items, headings, quotes, etc.)
- [**Multiline element transformer**](https://lexical.dev/docs/api/modules/lexical_markdown#multilineelementtransformer) for multiline block elements (admonitions, code blocks, etc.)

### Key concepts
Understanding these core properties will help you create effective transformers:

- `dependencies` - Lexical node classes your transformer requires (e.g., `[LinkNode, ImageNode]`)
- `export` - Function that converts Lexical nodes back to markdown syntax when saving
- `replace` - Function that converts matched markdown patterns into Lexical nodes when loading/typing
- `regExp`/`importRegExp` - Regular expressions that define which markdown patterns to match
- `trigger` - Character that activates live markdown conversion while typing (e.g., `)` for images)
