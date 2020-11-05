## Building a mobile/web application using AWS Amplify, Amazon Cognito and an OpenID Connect Identity Provider

AWS Enterprise customers would like to authenticate and authorize their mobile/web applications using a third-party OpenID connect identity provider (OIDC). This project will provide an approach for an end to end integration of serverless applications built using AWS Amplify and Amazon Cognito with a third party OIDC provider. This project would also describe how to approach authorization using a custom lambda authorizer which will provide quota enforcement per user and role-based access control.

## Overview of the Solution

The serverless web application hosted within the Amplify Framework, will utilize the Amplify libraries to authenticate and authorize the federated users against the configured Cognito user pool and app client.
As a backend resource, an Amazon API Gateway mock integration is configured. Additionally, a custom AWS Lambda authorizer provides quota enforcement per user and role-based access control at the API Gateway. This solution once deployed will allow a federated user to log in to the web application and consume the backend resource.

## Blogpost URL

[Building an application with AWS Amplify, Amazon Cognito, and an OpenID Connect Identity Provider](https://aws.amazon.com/blogs/mobile/building-an-application-with-aws-amplify-amazon-cognito-and-an-openid-connect-identity-provider/)

## api-backend

For more details, please refer the [README](api-backend/README.md)

## amplify-frontend

For more details, please refer the [README](amplify-frontend/README.md)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
