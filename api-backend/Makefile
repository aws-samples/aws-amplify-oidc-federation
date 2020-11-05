# CloudFormation Makefile

.ONESHELL:
SHELL := /bin/bash

##Parameters
AWS_REGION			 	?= <replace with region where the deployment should live>
PROFILE                 ?= <replace with named profile>
STACK_NAME 		  	 	?= LambdaAuthorizer
IDPNAME					?= <replace with name of the Provider>
CLIENT_ID				?= <replace with OIDC IdP client id>
CLIENT_SECRET			?= <replace with OIDC IdP client secret>
ISSUER					?= <replace with OIDC issuer url>
COGNITO_DOMAIN			?= <replace with cognito domain prefix name>
DEFAULT_CALL_LIMIT		?= <replace with default daily call quota limit>
ARTEFACT_S3_BUCKET		?= <replace with s3 bucket name where to push artefacts>
ROLE_ATTRIBUTE 	        ?= department
USERNAME                ?= email
##System paramteres
current_dir 	:=  $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
SOURCE_TEMPLATE	:=	$(current_dir)/CloudFormationTemplateFull.yaml
OUTPUT_TEMPLATE	:=	$(current_dir)/outputtemplate.yaml


build:
	@mkdir $(current_dir)/layers/python; \
	pip3 install -r $(current_dir)/layers/requirements.txt -t $(current_dir)/layers/python/; \
	cd $(current_dir)/layers; \
	zip -r dependencies.zip python/; \
	cd $(current_dir); \
	rm -fr $(current_dir)/layers/python; \
	aws cloudformation package --template-file $(SOURCE_TEMPLATE) \
	 --s3-bucket $(ARTEFACT_S3_BUCKET) \
	 --output-template-file $(OUTPUT_TEMPLATE) \
	 --profile $(PROFILE) \
	 --region $(AWS_REGION)

apply: 
	@aws cloudformation deploy \
	--template-file $(OUTPUT_TEMPLATE) \
	--stack-name $(STACK_NAME) \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameter-overrides \
	Bucket=$(ARTEFACT_S3_BUCKET) \
	DefaultCallLimit=$(DEFAULT_CALL_LIMIT) \
	IdpName=$(IDPNAME) \
	ClientId=$(CLIENT_ID) \
	ClientSecret=$(CLIENT_SECRET) \
	Issuer=$(ISSUER) \
	CognitoDomain=$(COGNITO_DOMAIN) \
	RoleAttribute=$(ROLE_ATTRIBUTE) \
	Username=$(USERNAME) \
	--region $(AWS_REGION) \
	--profile $(PROFILE)

deploy: build apply




	
