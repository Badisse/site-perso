DC = docker compose
DCE = $(DC) exec
IMAGE = nextjs-typescript
PACKAGE = --help

# Get help
help:
	@ echo
	@ echo '  Usage:'
	@ echo ''
	@ echo '    make <target> [flags...]'
	@ echo ''
	@ echo '  Targets:'
	@ echo ''
	@ awk '/^#/{ comment = substr($$0,3) } comment && /^[a-zA-Z][a-zA-Z0-9_-]+ ?:/{ print "   ", $$1, comment }' $(MAKEFILE_LIST) | column -t -s ':' | sort
	@ echo ''
	@ echo '  Flags:'
	@ echo ''
	@ awk '/^#/{ comment = substr($$0,3) } comment && /^[a-zA-Z][a-zA-Z0-9_-]+ ?\?=/{ print "   ", $$1, $$2, comment }' $(MAKEFILE_LIST) | column -t -s '?=' | sort
	@ echo ''

# Build containers
build:
	$(DC) build

# Run containers
start:
	$(DC) up

# Stop and remove containers
stop:
	$(DC) down

# Install node package with argument PACKAGE
install-package:
	$(DCE) $(IMAGE) yarn add $(PACKAGE)

# Execute command COMMAND inside container
exec:
	$(DCE) $(IMAGE) $(COMMAND)

.PHONY: help build start stop install-package