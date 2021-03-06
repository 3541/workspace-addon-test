BUILD_DIR := build
BUILD_STAMP := $(BUILD_DIR)/build.stamp
DEPLOY_STAMP := $(BUILD_DIR)/deploy.stamp
SRC := $(shell find src/ -type f -name '*.ts')

.PHONY: all format clean deploy init

all: $(BUILD_STAMP)

format:
	npm run format

clean:
	rm -rf $(BUILD_DIR)

deploy: $(DEPLOY_STAMP)

$(DEPLOY_STAMP): $(BUILD_STAMP)
	npm run deploy

$(BUILD_STAMP): $(SRC) package.json tsconfig.json
	@mkdir -p $(BUILD_DIR)
	npm run build
	@touch $(BUILD_STAMP)

init:
	if [ ! -d "node_modules" ]; then npm i; fi;
	if [ ! -f "$(HOME)/.clasprc.json" ]; then npx clasp login; fi;
	if [ ! -f ".clasp.json" ]; then npx clasp create --type standalone; fi;
	if [ $$(npx clasp deployments | wc -l) -lt 3 ]; then \
		$(MAKE) $(BUILD_STAMP); \
		npx clasp push -f; \
		npx clasp deploy; \
	fi
	npx clasp deployments | tail -n1 | cut -d' ' -f2 > .depid
