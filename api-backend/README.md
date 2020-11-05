# Backend Resources Deployment


## Description:
This package provides cloudformation and python source code for deployment of the blogpost solution backend. The cloudformation stack will create the following resources:
- Lambda Authorizer function
- Lambda Layer containing dependencies for the authorizer
- IAM Role&Policies
- DynamoDB tables
- Cognito User Pool
- API


## Parameters:
### Update the below parameters in the Makefile according to your configuration
- AWS_REGION - aws region where the solution will be deployed
- PROFILE - named profile that will apply to the AWS CLI command
- STACK_NAME - CloudFormation stack name
- IDPNAME - Name you give in Cognito configuration for the OIDC provider
- CLIENT_ID - OIDC application ID
- CLIENT_SECRET - OIDC application secret
- ISSUER - OIDC issuer URL
- COGNITO_DOMAIN - Cognito domain prefix name
- DEFAULT_CALL_LIMIT - Default daily call limit per user
- ARTEFACT_S3_BUCKET - S3 bucket where the infrastructure code will be stored. (! The bucket must be created in the same region where the solution lives)
- ROLE_ATTRIBUTE - The user attribute we will use for Role based access control check
- USERNAME - The Cognito Attribute that will act as the user username


## Limitation:
The AttributeMapping parameter for CognitoUserPoolIdP has been hardcoded.
```Yaml
AttributeMapping:
    custom:department: "department"
    email: "email"
    family_name: "family_name"
    given_name: "given_name"
    username: "sub"
```
Remember to change the mapping in case your attributes doesn't match with the one defined in the template.


## Deployment commands:
All deployemnts are done using makefile, following commands are available:
 - ```make build```                  - Packages the local artifacts (local paths) that your AWS CloudFormation template references.      
 - ```make apply```                  - Deploys  the specified AWS CloudFormation template by creating and then executing a change set.
 - ```make deploy```                 - executes make build and make apply


## Notes:
CloudFormation stack will enable CORS for the REST API resource. It will set the value of the header  ```Access-Control-Allow-Headers``` to ```'*'``` which will allow any origin to access the resource. After deploying the frontend you may change the key value to the domain of the frontend application hosted on amplify in order to restrict access to the API resource.
