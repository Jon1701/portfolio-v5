# Portfolio v5

- This is the 5th version of my portfolio website
- Built on Gatsby.js

## Prerequisites

- [Node.js 16.13.1 LTS](https://nodejs.org/en/)
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

## Commands

The following `make` targets are available:

- `make install` to install project dependencies
- `make build` to build the project
- `make copy-project-screenshots` to copy project screenshots to the build folder
- `make dev` to start the Development server for local rapid iteration
- `make staging` to start the Staging server for local testing before deployment
- `make clean` to clean generated artifacts
