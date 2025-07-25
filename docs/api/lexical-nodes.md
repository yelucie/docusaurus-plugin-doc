---
id: nodes
title: Lexical Nodes
---

# Lexical Nodes

This project extends Lexical with custom nodes to support advanced features in the Docusaurus WYSIWYG editor.

## Built-in Lexical Nodes

| Node                  | Lexical Docs                                                                   | Description                                   |
| --------------------- | ------------------------------------------------------------------------------ | --------------------------------------------- |
| **AutoLinkNode**      | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_link.AutoLinkNode)      | Automatically detects and links URLs/emails   |
| **CodeNode**          | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_code.CodeNode)          | Represents a code block                       |
| **CodeHighlightNode** | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_code.CodeHighlightNode) | Syntax highlighting for code blocks           |
| **HashtagNode**       | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_hashtag.HashtagNode)    | Handles hashtags                              |
| **HeadingNode**       | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_rich_text.HeadingNode)  | Heading elements (h1-h6)                      |
| **LinkNode**          | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_link.LinkNode)          | Represents a hyperlink                        |
| **ListItemNode**      | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_list.ListItemNode)      | Represents a list item                        |
| **ListNode**          | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_list.ListNode)          | Represents a list (ordered, unordered, check) |
| **MarkNode**          | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_mark.MarkNode)          | Inline mark formatting                        |
| **OverflowNode**      | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_overflow.OverflowNode)  | Handles overflow content                      |
| **QuoteNode**         | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_rich_text.QuoteNode)    | Blockquote elements                           |
| **TableNode**         | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_table.TableNode)        | Table container                               |
| **TableRowNode**      | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_table.TableRowNode)     | Table row                                     |
| **TableCellNode**     | [📖 Docs](https://lexical.dev/docs/api/classes/lexical_table.TableCellNode)    | Table cell                                    |

## Custom Nodes

| Node               | File                        | Description                                                     |
| ------------------ | --------------------------- | --------------------------------------------------------------- |
| **AdmonitionNode** | [💻 Code](insert code here) | Renders Docusaurus-style admonitions (note, tip, warning, etc.) |
| **EquationNode**   | [💻 Code](insert code here) | Renders math equations using KaTeX                              |
| **ImageNode**      | [💻 Code](insert code here) | Handles images with alt text.                                   |
