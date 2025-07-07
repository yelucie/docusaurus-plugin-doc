# Plugin Options

Accepted fields:

| Name | Type | Default | Description | 
| --- | --- | --- | --- |
| `defaultBranch` | <code>string \| null</code> | `'main'` | Default branch of the Docusaurus project. |
| `platform` | `'GitHub'` |  | Platform of the Docusaurus project repository. |
| `githubClientId` | <code>string \| null</code> |  | **Required when using GitHub**. [Client ID](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app#registering-your-app) of the GitHub App. |
| `editButtonClassName` | <code>string \| null</code> | [`ThemeClassNames.common.editThisPage`](https://docusaurus.io/docs/styling-layout#theme-class-names)|  Classname of the "Edit this page" button. |
| `showStickyToolbar` | `boolean` | `true` | Whether to use the sticky toolbar on top of the page.

Example configuration:

```js title="docusaurus.config.js"
export default {
    plugins: [
    [
      "docusaurus-plugin-wysiwyg",
      {
        defaultBranch: 'develop',
        platform: 'GitHub',
        githubClientId: 'Iv23li6uoWrfJS5ppPbt'
      },
    ],
  ],
}
```