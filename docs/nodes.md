# Lexical Nodes

[**Lexical nodes**](https://lexical.dev/docs/concepts/nodes) are the fundamental **building blocks** of content in the WYSIWYG editor. They represent the **structure of the editor**, similar to how HTML elements represent the structure of a web page.

Nodes form a **tree structure** called the EditorState. For example, a simple editor with a heading, a list, and a quote might look like this:

```
RootNode
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

## Types of Nodes

Lexical has three extendable node types :

| Type                                                                              | Use Case                                        |
| --------------------------------------------------------------------------------- | ----------------------------------------------- |
| [**`ElementNode`**](https://lexical.dev/docs/api/classes/lexical.ElementNode)     | Parent for other nodes                          |
| [**`TextNode`**](https://lexical.dev/docs/api/classes/lexical.TextNode)           | Leaf type of node that contains text            |
| [**`DecoratorNode`**](https://lexical.dev/docs/api/classes/lexical.DecoratorNode) | Wrapper node to insert components in the editor |

## Nodes in this Plugin

You can find all the used nodes in the [`EditorNodes`](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg/blob/feature/55-link/src/theme/nodes/EditorNodes.tsx) file.

### Lexical's built-in nodes

This plugin uses the following built-in nodes from Lexical:

- Element nodes:
  - Code: [`CodeNode`](https://lexical.dev/docs/api/classes/lexical_code.CodeNode)
  - Heading: [`HeadingNode`](https://lexical.dev/docs/api/classes/lexical_rich_text.HeadingNode)
  - Link: [`LinkNode`](https://lexical.dev/docs/api/classes/lexical_link.LinkNode)
    - [`AutoLinkNode`](https://lexical.dev/docs/api/classes/lexical_link.AutoLinkNode)
  - List: [`ListNode`](https://lexical.dev/docs/api/classes/lexical_list.ListNode)
  - List item: [`ListItemNode`](https://lexical.dev/docs/api/classes/lexical_list.ListItemNode)
  - Quote: [`QuoteNode`](https://lexical.dev/docs/api/classes/lexical_rich_text.QuoteNode)
- Text nodes:
  - Code: [`CodeHighlightNode`](https://lexical.dev/docs/api/classes/lexical_code.CodeHighlightNode)

### Custom nodes for Docusaurus markdown rendering

This plugin uses the following custom nodes :

- Decorator nodes:
  - Admonition: `AdmonitionNode`
  - Equation: `EquationNode`
  - Image: `ImageNode`

:::tip
If you build a custom node, don't forget to register it in the [`EditorNodes`](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg/blob/feature/55-link/src/theme/nodes/EditorNodes.tsx) file too!
:::

## Learn More

- [Creating custom nodes](https://lexical.dev/docs/concepts/nodes#creating-custom-nodes)
- [Lexical Nodes API Reference](https://lexical.dev/docs/concepts/nodes)