# TODO GitHub Tutorial

Vérifier les liens aussi

This guide shows you how to use the Docusaurus Editor Plugin with your own GitHub App.

## Prerequisites

- A [GitHub account](https://github.com/) with repository access
- A deployment platform ([Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or similar) for the API

## Step 1: Setup the GitHub App

### Create the GitHub App

1. Go to your GitHub account → Settings → Developer settings → GitHub Apps
2. Click on "New GitHub App"
3. Fill in the required information:
   - **App name**
   - **Homepage URL**
   - **Callback URL**: Your API deployment URL + `/github/callback`

### Set Repository Permissions

Your GitHub App needs these [repository permissions](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app):

| Permission          | Access Level   | Why Needed                            |
| ------------------- | -------------- | ------------------------------------- |
| **Contents**        | Read and write | Create and modify documentation files |
| **Pull requests**   | Read and write | Create PRs for documentation changes  |
| **Metadata**        | Read-only      | Access repository information         |
| **Commit statuses** | Read-only      | Check build status of PRs             |

### Generate Private Key

1. After creating the app, scroll down to "Private keys"
2. Click "[Generate a private key](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps#generating-private-keys)"
3. Download and save the `.pem` file securely
4. Note your **Client ID** from the app settings page

Check out the [**GitHub documentation**](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app) for more details.

### Install the GitHub App

1. Go to your new GitHub App's settings
2. Click "[Install App](https://docs.github.com/en/apps/using-github-apps/installing-your-own-github-app)" in the sidebar
3. Choose the repositories where you want to enable WYSIWYG editing

## Step 2 Deploy the API

1. Clone the [Plugin API repository](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg-api):

   ```bash
   git clone https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg-api.git
   cd docusaurus-plugin-wysiwyg-api
   ```

2. Follow the [deployment instructions](https://github.com/Audemars-Piguet/docusaurus-plugin-wysiwyg-api/blob/main/README.md)

## Step 3: Configure your Docusaurus site

Add the GitHub App's client ID to your `docusaurus.config.js`:

```js title="docusaurus.config.js"
module.exports = {
  // ...other config
  plugins: [
    [
      "docusaurus-plugin-wysiwyg",
      {
        githubClientId: "xxxxxxxxxxxxxxxxxxxx",
      },
    ],
  ],
};
```
