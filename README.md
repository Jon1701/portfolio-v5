# portfolio-v5

- This is the 5th version of my portfolio website
- Built on Gatsby.js

## Prerequisites

- [Node.js 16.13.1 LTS](https://nodejs.org/en/)
  - Ensure that [Deeper Shell Integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) is set up as well
- [GNU Make](https://www.gnu.org/software/make/)
- [Node Version Manager](https://github.com/nvm-sh/nvm)

## Set Up Copy Project Screenshots Command

In order to display a carousel of project screenshots, they need to be copied from an external source.

1. Open your shell configuration file
   - For `bash`, use `~/.bashrc`
   - For `zsh`, use `~/.zshrc`
2. Add the following exported variable to the bottom of the file

   ```
   export WORK_PROJECTS_FOLDER=
   ```

3. To the right of the equal sign, add the **absolute path** to the folder which contains the project screenshots

4. Save and close the editor

5. Reload your shell configuration file (or close and reopen all open shells):

   - For `bash`, use `source ~/.bashrc`
   - For `zsh`, use `source ~/.zshrc`

6. Verify exported value:

   ```
   $ echo ${WORK_PROJECTS_FOLDER}
   ```

## Set Up Deployment Environment

1. Create a [Personal Access Token](https://github.com/settings/tokens/new)

2. Set **Note** to:

   ```
   gh-pages deployment
   ```

3. Set **Expiration** to:

   ```
   30 days
   ```

4. For **Select scopes**, make sure the following are the _ONLY_ ones checked:

   - `public_repo`

5. Click on **Generate token**

6. Copy the token to clipboard

7. In a terminal window, open your shell configuration file:

   - For `bash`, use `~/.bashrc`
   - For `zsh`, use `~/.zshrc`

8. Add the following exported variable to the bottom of the file

   ```
   export GITHUB_PERSONAL_ACCESS_TOKEN_DEPLOY_GH_PAGES=
   ```

9. Save and close the editor

10. Reload your shell configuration file (or close and reopen all open shells):

- For `bash`, use `source ~/.bashrc`
- For `zsh`, use `source ~/.zshrc`

11. Verify exported value:

    ```
    $ echo ${GITHUB_PERSONAL_ACCESS_TOKEN_DEPLOY_GH_PAGES}
    ```

12. Deploy using the command:

    ```
    make deploy
    ```

## Commands

The following `make` targets are available:

- `make install` to install project dependencies
- `make build` to build the project
- `make copy-project-screenshots` to copy project screenshots to the build folder
- `make dev` to start the Development server for local rapid iteration
- `make staging` to start the Staging server for local testing before deployment
- `make dev-all` to start the Development server which accepts connections from all devices on the network
- `make staging-all` to start the Staging server which accepts connections from all devices on the network
- `make clean` to clean generated artifacts
- `make deploy` to deploy the site to the GitHub Pages repository
- `make check-is-master-branch` to check if the current branch is `master`
- `make generate-cname` to generate a CNAME file into the build folder
- `make audit` to check for security vulnerabilities
