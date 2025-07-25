---
id: plugin-options
title: Plugin Options
sidebar_label: Plugin Options
---

# Plugin Options

The plugin supports several options to customize its behavior. All options are optional except for `githubClientId`, which is required for GitHub authentication.

## Options Reference

| Option                | Type      | Default               | Description                                                                                                  |
| --------------------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| `githubClientId`      | `string`  | **Required**          | Client ID of your GitHub OAuth App. Used for authentication.                                                 |
| `defaultBranch`       | `string`  | `'main'`              | The default branch of your Docusaurus project.                                                               |
| `commitPrefix`        | `string`  | `'docusaurus-editor'` | Prefix for branches created by the editor.                                                                   |
| `editButtonClassName` | `string`  | `Theme`                  | CSS class name for the "Edit this page" button.                                                              |
| `showFullToolbar`     | `boolean` | `true`                | Whether to show the full formatting toolbar in the editor. Set to `false` to show the floating toolbar only. |

## Example Configuration

Add the plugin to your `docusaurus.config.js`:

```js
plugins: [
  [
    "docusaurus-plugin-wysiwyg",
    {
      githubClientId: "YOUR_GITHUB_CLIENT_ID",
      defaultBranch: "main",
      commitPrefix: "docs-edit",
      editButtonClassName: "my-edit-btn",
      showFullToolbar: true,
    },
  ],
];
```
