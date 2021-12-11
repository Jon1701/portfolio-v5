# Path to Node Modules binaries.
PATH_NODE_MODULES_BIN=./node_modules/.bin

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
	@echo "Done starting the Development server"

# Starts the local Staging server.
staging:
	@echo "Starting the Staging server..."
	@${PATH_NODE_MODULES_BIN}/gatsby serve \
		--port ${PORT_STAGING_SERVER}
	@echo "Done starting the Staging server"

# Cleans generated artifacts.
clean:
	@echo "Cleaning generated artifacts..."
	@${PATH_NODE_MODULES_BIN}/gatsby clean 
	@echo "Done cleaning generated artifacts"