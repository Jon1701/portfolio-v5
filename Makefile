# Path to Public Static folder.
PATH_TO_PUBLIC_PROJECT_SCREENSHOTS_FOLDER=./public/static/ProjectScreenshots

# Path to Node Modules binaries.
PATH_NODE_MODULES=./node_modules
PATH_NODE_MODULES_BIN=${PATH_NODE_MODULES}/.bin

# Gatsby Development server port.
PORT_DEV_SERVER=8080

# Gatsby Staging server port.
PORT_STAGING_SERVER=9000

# Repository name of the deployed site.
DEPLOYMENT_REPO_NAME=Jon1701.github.io

# Canonical URL of the deployed website.
DEPLOYMENT_CANONICAL_URL=jonbalon.com

# Current branch
GH_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

# Installs project dependencies.
install:
	@echo "Installing project dependencies..."
	@npm ci
	@echo "Done installing project dependencies"

# Builds the website.
build:
	@echo "Building site..."
	@${PATH_NODE_MODULES_BIN}/gatsby build
	@echo "Done building site"

# Starts the local Development server.
dev:
	@echo "Starting the Development server..."
	@${PATH_NODE_MODULES_BIN}/gatsby develop \
		--port ${PORT_DEV_SERVER}

# Starts the local Development server and allow connections from all devices
# on the network.
dev-all:
	@echo "Starting the Development server..."
	@${PATH_NODE_MODULES_BIN}/gatsby develop \
	  --host 0.0.0.0 \
		--port ${PORT_DEV_SERVER}

# Starts the local Staging server.
staging:
	@echo "Starting the Staging server..."
	@${PATH_NODE_MODULES_BIN}/gatsby serve \
		--port ${PORT_STAGING_SERVER}

# Starts the local Staging server and allow connections from all devices
# on the network.
staging-all:
	@echo "Starting the Staging server..."
	@${PATH_NODE_MODULES_BIN}/gatsby serve \
	  --host 0.0.0.0 \
		--port ${PORT_STAGING_SERVER}

# Cleans generated artifacts.
clean:
	@echo "Cleaning generated artifacts..."
	@${PATH_NODE_MODULES_BIN}/gatsby clean 
	@echo "Done cleaning generated artifacts"

# Runs the linter to check code quality for JavaScript.
lint-js:
	@echo "Linting JavaScript..."
	@${PATH_NODE_MODULES_BIN}/eslint \
		--config .eslintrc.js \
		--ext .js \
		.
	@echo "Done linting JavaScript"

# Runs the linter to check code quality for styles.
lint-css:
	@echo "Linting styles..."
	@${PATH_NODE_MODULES_BIN}/stylelint \
		'./src/**/*.js'
	@echo "Done linting styles"

# Copy Project Screenshots to the public static folder.
copy-project-screenshots:
	@echo "Copying Project screenshots to ${PATH_TO_PUBLIC_PROJECT_SCREENSHOTS_FOLDER} ..."
	@rm -rf ${PATH_TO_PUBLIC_PROJECT_SCREENSHOTS_FOLDER}
	@mkdir -p ${PATH_TO_PUBLIC_PROJECT_SCREENSHOTS_FOLDER}
	@cp -a ${WORK_PROJECTS_FOLDER}/. ${PATH_TO_PUBLIC_PROJECT_SCREENSHOTS_FOLDER}/
	@echo "Done copying Project screenshots"

# Checks if the current branch is master.
check-is-master-branch:
	@echo "Checking if the current branch is 'master'..."
	@if [[ "${GH_BRANCH}" != "master" ]]; then \
		echo "Current branch is not 'master'"; \
		exit 1; \
	fi 
	@echo "Done checking if the current branch is 'master'"

# Generates a CNAME file to configure the custom domain name.
generate-cname:
	@echo Generating CNAME...
	@echo ${DEPLOYMENT_CANONICAL_URL} > ./public/CNAME
	@echo Done generating CNAME

# Deploy to GitHub Pages.
deploy: check-is-master-branch clean install build generate-cname copy-project-screenshots
	@echo "Deploying site..."
	@${PATH_NODE_MODULES_BIN}/gh-pages-clean
	@${PATH_NODE_MODULES_BIN}/gh-pages \
	--dist public/ \
	--message 'This is an auto-generated commit' \
	--repo https://${GITHUB_PERSONAL_ACCESS_TOKEN_DEPLOY_GH_PAGES}@github.com/Jon1701/${DEPLOYMENT_REPO_NAME}
	@echo "Done deploying site"

# Checks for known security vulnerabilities.
audit:
	@echo Checking for security vulnerabilities...
	@npm audit --production
	@echo Done checking for security vulnerabilities