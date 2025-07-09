# Lexical Nodes

Lexical nodes are the fundamental building blocks of content in the Lexical editor. They represent the structure and formatting of your document, similar to how HTML elements represent the structure of a web page.

## What is a Node?

A node is a JavaScript object that describes a piece of content or structure in the editor. Nodes are organized in a tree, called the EditorState, which represents the entire document.

Each node type corresponds to a specific kind of content or formatting, such as paragraphs, headings, lists, or text with bold/italic styles.

## Common Node Types

- **RootNode**: The top-level node that contains all other nodes.
- **ParagraphNode**: Represents a paragraph of text.
- **HeadingNode**: Represents headings (h1, h2, etc.).
- **ListNode**: Represents ordered or unordered lists.
- **ListItemNode**: Represents an item within a list.
- **QuoteNode**: Represents a blockquote.
- **TextNode**: Represents a piece of text, which can have formatting (bold, italic, etc.).
- **CodeNode**: Represents a block of code.

## Example Node Tree

```
RootNode
  ├── ParagraphNode
  │     └── TextNode (with formatting like bold, italic)
  ├── HeadingNode
  │     └── TextNode
  ├── ListNode
  │     ├── ListItemNode
  │     │     └── TextNode
  │     └── ListItemNode
  │           └── TextNode
  └── QuoteNode
        └── TextNode
```

## How Nodes and Transformers Work Together

Transformers are responsible for converting between markdown and Lexical nodes:

- **Import**: Transformers parse markdown (like `**bold**`) and create the corresponding Lexical nodes (like a `TextNode` with bold formatting).
- **Export**: Transformers convert Lexical nodes back into markdown syntax.

For example, when importing `**bold text**`, the transformer creates a `TextNode` with bold formatting. When exporting, it finds bold `TextNode`s and outputs `**bold text**` in markdown.

## Custom Nodes

You can extend Lexical by creating your own custom nodes for specialized content (like admonitions, tabs, or custom widgets). Custom nodes can define their own structure, formatting, and how they are rendered in the editor and exported to markdown.

```ts
class AdmonitionNode extends ElementNode {
  // Custom implementation...
}

// Register your custom node with the editor
editor.registerNodeType(AdmonitionNode);
```

Custom nodes often require custom transformers to handle their import/export logic.

## Learn More

- [Lexical Node API Reference](https://lexical.dev/docs/api/classes/lexical.Node)
- [Lexical Architecture](https://lexical.dev/docs/concepts/architecture)
- [Custom Nodes Guide](https://lexical.dev/docs/concepts/custom-nodes)

