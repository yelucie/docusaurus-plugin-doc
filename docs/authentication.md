# TODO Authentication

Revérifier les liens

# GitHub Authentication

The Audemars Piguet GitHub App allows users to edit documentation directly from your Docusaurus site. To activate this feature, register your site’s URL information. Once registered, users are redirected to the correct GitHub App for editing.

:::info[Choose your setup]

We strongly recommend creating your own GitHub App and API for full control, security, and customization. This approach lets you tailor authentication, permissions, and workflows to your needs. Get started with our [GitHub Authentication tutorial](./github-tutorial.md).

If you want to try things out quickly or need a simple setup, you can use our ready-made GitHub App and API as described below.
:::

## Prerequisites

- A [GitHub account](https://github.com/) with repository access
- Our GitHub App client ID


## Step 1: Install Our GitHub App

1. Visit our [GitHub App](Here add link to our GitHub App).
2. Click "Add" and then "Install it for free."
3. Log in with your GitHub account.
4. When registering your site, provide:
   - **Repository URL**: The URL of your Docusaurus repository
   - **Website URL**: The public URL of your Docusaurus site

:::caution[Important]
Double-check your repository URL before submitting. You cannot remove entries after registration. To update your website URL, log in with the same GitHub account and re-register using the same repository URL—the entry will be updated automatically.
:::

## Step 2: Configure Docusaurus

Add our GitHub App client ID to your `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  // ...other config
  plugins: [
    [
      "docusaurus-plugin-wysiwyg",
      {
        githubClientId: "Iv23li6uoWrfJS5ppPbt",
      },
    ],
  ],
};
```

## How does it work?

Your site’s URL info is stored securely in our database. When users click `Edit this page` for the first time, they’re redirected to our GitHub App to authenticate. This service will handle the remaining aspects, and redirect the user back. For technical details, see our [API source code](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg-api-ap).

:::info
This service is provided as-is and will not be maintained. If you want to use your own GitHub App, you can check out the [GitHub Authentication tutorial](./github-tutorial.md).
:::