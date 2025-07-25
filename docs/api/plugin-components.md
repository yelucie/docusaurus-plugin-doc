---
id: components
title: UI Components
sidebar_label: Components
---

# UI Components

This plugin is built with a modular set of React components, organized by feature and responsibility.  
Below is a categorized list of the main components used in the project.

---

## Editor & Toolbar

| Component            | File                                                                                                                    | Description                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Editor**           | [`src/theme/Editor.tsx`](../src/theme/Editor.tsx)                                                                       | Main editor composition and plugin registry |
| **ToolbarComponent** | [`src/theme/components/Toolbar/ToolbarComponent/index.tsx`](../src/theme/components/Toolbar/ToolbarComponent/index.tsx) | Main formatting toolbar                     |
| **ToolbarDropdown**  | [`src/theme/components/Toolbar/ToolbarDropdown/index.tsx`](../src/theme/components/Toolbar/ToolbarDropdown/index.tsx)   | Dropdown menus for block and node actions   |
| **ToolbarItem**      | [`src/theme/components/Toolbar/ToolbarItem/index.tsx`](../src/theme/components/Toolbar/ToolbarItem/index.tsx)           | Individual toolbar button                   |
| **ToolbarIcon**      | [`src/theme/components/ui/Icons/ToolbarIcon/index.tsx`](../src/theme/components/ui/Icons/ToolbarIcon/index.tsx)         | Icon for toolbar buttons                    |
| **Divider**          | [`src/theme/components/Toolbar/ToolbarDivider/index.tsx`](../src/theme/components/Toolbar/ToolbarDivider/index.tsx)     | Toolbar divider                             |

---

## Dialogs & Modals

| Component             | File                                                                                      | Description                     |
| --------------------- | ----------------------------------------------------------------------------------------- | ------------------------------- |
| **Modal**             | [`src/theme/components/ui/Modal/index.tsx`](../src/theme/components/ui/Modal/index.tsx)   | Generic modal dialog            |
| **DialogActions**     | [`src/theme/components/ui/Dialog/index.tsx`](../src/theme/components/ui/Dialog/index.tsx) | Dialog action buttons container |
| **DialogButtonsList** | [`src/theme/components/ui/Dialog/index.tsx`](../src/theme/components/ui/Dialog/index.tsx) | List of dialog buttons          |

---

## Markdown & Editor Actions

| Component                       | File                                                                                                                                        | Description                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **EditorMarkdownActionButtons** | [`src/theme/components/Footer/EditorMarkdownActionButtons/index.tsx`](../src/theme/components/Footer/EditorMarkdownActionButtons/index.tsx) | Markdown/rich text toggle, reset, metadata |
| **ActionsIcon**                 | [`src/theme/components/ui/Icons/ActionsIcon/index.tsx`](../src/theme/components/ui/Icons/ActionsIcon/index.tsx)                             | Icon for action buttons                    |
| **Button**                      | [`src/theme/components/ui/Button/index.tsx`](../src/theme/components/ui/Button/index.tsx)                                                   | Reusable button component                  |

---

## Specialized Node Components

| Component               | File                                                                                                                                | Description                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **AdmonitionComponent** | [`src/theme/components/Admonition/AdmonitionComponent/index.tsx`](../src/theme/components/Admonition/AdmonitionComponent/index.tsx) | Renders admonition blocks            |
| **AdmonitionEditor**    | [`src/theme/components/Admonition/AdmonitionEditor/index.tsx`](../src/theme/components/Admonition/AdmonitionEditor/index.tsx)       | Editor for admonition content        |
| **AdmonitionRenderer**  | [`src/theme/components/Admonition/AdmonitionRenderer/index.tsx`](../src/theme/components/Admonition/AdmonitionRenderer/index.tsx)   | Renders static admonition content    |
| **EquationComponent**   | [`src/theme/components/Equation/EquationComponent/index.tsx`](../src/theme/components/Equation/EquationComponent/index.tsx)         | Renders math equations               |
| **EquationAlterer**     | [`src/theme/components/Equation/EquationAlterer/index.tsx`](../src/theme/components/Equation/EquationAlterer/index.tsx)             | Modal for editing equations          |
| **ImageComponent**      | [`src/theme/components/Image/ImageComponent/index.tsx`](../src/theme/components/Image/ImageComponent/index.tsx)                     | Renders images and handles selection |
| **ImageAlterer**        | [`src/theme/components/Image/ImageAlterer/index.tsx`](../src/theme/components/Image/ImageAlterer/index.tsx)                         | Modal for editing image properties   |

---

## Link Editing

| Component              | File                                                                                                        | Description                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **FloatingLinkEditor** | [`src/theme/components/FloatingLinkEditor/index.tsx`](../src/theme/components/FloatingLinkEditor/index.tsx) | Floating toolbar for editing links |
| **LinkIcon**           | [`src/theme/components/ui/Icons/LinkIcon/index.tsx`](../src/theme/components/ui/Icons/LinkIcon/index.tsx)   | Icon for link actions              |

---

## Inputs & Form Controls

| Component         | File                                                                                                        | Description            |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------- |
| **TextInput**     | [`src/theme/components/ui/Input/TextInput/index.tsx`](../src/theme/components/ui/Input/TextInput/index.tsx) | Single-line text input |
| **TextArea**      | [`src/theme/components/ui/Input/TextArea/index.tsx`](../src/theme/components/ui/Input/TextArea/index.tsx)   | Multi-line text area   |
| **CheckboxInput** | [`src/theme/components/ui/Input/Checkbox/index.tsx`](../src/theme/components/ui/Input/Checkbox/index.tsx)   | Checkbox input         |
| **DropDown**      | [`src/theme/components/ui/DropDown/index.tsx`](../src/theme/components/ui/DropDown/index.tsx)               | Dropdown menu          |
| **DropDownItem**  | [`src/theme/components/ui/DropDown/index.tsx`](../src/theme/components/ui/DropDown/index.tsx)               | Dropdown menu item     |

---

## Table of Contents

| Component                 | File                                                                                                        | Description                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **TableOfContentsPlugin** | [`src/theme/plugins/TableOfContentsPlugin/index.tsx`](../src/theme/plugins/TableOfContentsPlugin/index.tsx) | Renders the table of contents |

---

## Utility & Styling

| Component       | File                                                                              | Description                           |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------- |
| **joinClasses** | [`src/theme/theme-utils/joinClasses.ts`](../src/theme/theme-utils/joinClasses.ts) | Utility for combining CSS class names |

---

## Icons

All icons are defined as CSS classes in  
[`src/theme/components/ui/Icons/styles.module.css`](../src/theme/components/ui/Icons/styles.module.css)  
and used via `<i className={...} />` in the relevant components.

---

## Notes

- Many components are used as decorators for Lexical nodes (e.g., AdmonitionComponent, EquationComponent, ImageComponent).
- Modal and dialog components are reused for editing specialized content.
- Toolbar and dropdown components are highly composable for extensibility.

---

For more details, see the [source code](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg/tree/main/src/theme/components).
