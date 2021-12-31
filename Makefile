# Path to Public Static folder.
PATH_TO_PUBLIC_PROJECT_SCREENSHOTS_FOLDER=./public/static/ProjectScreenshots

# Path to Node Modules binaries.
PATH_NODE_MODULES=./node_modules
PATH_NODE_MODULES_BIN=${PATH_NODE_MODULES}/.bin

# Gatsby Development server port.
PORT_DEV_SERVER=8080

# Gatsby Staging server port.
PORT_STAGING_SERVER=9000

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
