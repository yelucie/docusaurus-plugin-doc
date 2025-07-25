---
id: plugins
title: Lexical Plugins
sidebar_label: Lexical Plugins
---

# Lexical Plugins

[**Lexical plugins**](https://lexical.dev/docs/concepts/plugins) are modular pieces of logic that extend the editor’s functionality. Plugins can add features like toolbars, auto-formatting, keyboard shortcuts, and more, without modifying the core editor.

Plugins are typically React components that use the Lexical API to interact with the editor state.

---

## Plugins Used in This Project

You can find all plugin registrations in the [`Editor`](../src/theme/Editor.tsx) file.

### Built-in Lexical Plugins

| Plugin                   | Lexical Docs                                                                              | Description                                        |
| ------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **AutoFocusPlugin**      | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalAutoFocusPlugin)      | Automatically focuses the editor when it loads     |
| **CheckListPlugin**      | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalCheckListPlugin)      | Enables checklist functionality                    |
| **ClearEditorPlugin**    | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalClearEditorPlugin)    | Provides functionality to clear all editor content |
| **HistoryPlugin**        | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalHistoryPlugin)        | Provides undo/redo functionality                   |
| **ListPlugin**           | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalListPlugin)           | Handles ordered and unordered lists                |
| **RichTextPlugin**       | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalRichTextPlugin)       | Core rich text editing capabilities                |
| **TabIndentationPlugin** | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalTabIndentationPlugin) | Handles tab key behavior for indentation           |
| **LinkPlugin**           | [📖 Docs](https://lexical.dev/docs/api/modules/lexical_react_LexicalLinkPlugin)           | Enables hyperlink editing and navigation           |

---

### Custom Plugins in This Plugin

| Plugin                          | File                                                                                        | Description                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **AdmonitionPlugin**            | [`AdmonitionPlugin`](../src/theme/plugins/AdmonitionPlugin/index.tsx)                       | Adds support for Docusaurus-style admonitions        |
| **AutoSavePlugin**              | [`AutoSavePlugin`](../src/theme/plugins/AutoSavePlugin/index.tsx)                           | Automatically saves content to IndexedDB             |
| **CodeHighlightPlugin**         | [`CodeHighlightPlugin`](../src/theme/plugins/CodeHighlightPlugin/index.ts)                  | Syntax highlighting for code blocks                  |
| **EditorMarkdownActionsPlugin** | [`EditorMarkdownActionsPlugin`](../src/theme/plugins/EditorMarkdownActionsPlugin/index.tsx) | Provides markdown/rich text toggle and reset actions |
| **EquationsPlugin**             | [`EquationsPlugin`](../src/theme/plugins/EquationsPlugin/index.tsx)                         | Adds support for math equations (KaTeX)              |
| **FloatingLinkEditorPlugin**    | [`FloatingLinkEditorPlugin`](../src/theme/plugins/FloatingLinkEditorPlugin/index.tsx)       | Floating toolbar for editing links                   |
| **ImagesPlugin**                | [`ImagesPlugin`](../src/theme/plugins/ImagesPlugin/index.tsx)                               | Adds image insertion and drag-and-drop support       |
| **ShortcutsPlugin**             | [`ShortcutsPlugin`](../src/theme/plugins/ShortcutsPlugin/index.tsx)                         | Keyboard shortcuts for formatting and actions        |
| **TableOfContentsPlugin**       | [`TableOfContentsPlugin`](../src/theme/plugins/TableOfContentsPlugin/index.tsx)             | Generates and displays a table of contents           |
| **Toolbar Plugins**             | [`ToolbarPlugins`](../src/theme/plugins/ToolbarPlugins/)                                    | Floating and full toolbars for formatting            |
| **WYSIWYGMarkdownPlugin**       | [`WYSIWYGMarkdownPlugin`](../src/theme/plugins/WYSIWYGMarkdownPlugin/index.tsx)             | Markdown shortcut support (auto-format as you type)  |
