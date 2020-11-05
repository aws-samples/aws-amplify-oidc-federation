# Sample Web Application


## Getting Started

The open-source Amplify Framework provides the following products to build fullstack iOS, Android, Flutter, Web, and React Native apps:

- Amplify [CLI](https://docs.amplify.aws/cli) - Configure all the services needed to power your backend through a simple command line interface.
- Amplify [Libraries](https://docs.amplify.aws/lib/q/platform/js) - Use case-centric client libraries to integrate your app code with a backend using declarative interfaces.
- Amplify [UI Components](https://docs.amplify.aws/ui) - UI libraries for React, React Native, Angular, Ionic and Vue.

The Amplify [Console](https://aws.amazon.com/amplify/console/) is an AWS service that provides a git-based workflow for continuous deployment & hosting of fullstack web apps. Cloud resources created by the Amplify CLI are also visible in the Amplify Console.

### Install and configure Amplify CLI

First we need to make sure we have `npm` installed to be able to install the amplify cli:
```bash
npm install -g @aws-amplify/cli
```
Within the code directory install all the necessary dependencies by running
```bash
npm install
```
Initilaize the project by running:

```bash
amplify init
```
Once Amplify has been initialized we are now ready to deploy the first backend service. To do this, we can leverage the hosting backend service by running the following command from the root of the project

```bash
amplify add hosting
```

For the purpose of simplicity, the following options “Hosting with Amplify Console” and “Manual Deployment” can be chosen when prompted for the selections.

To create the necessary backend resources to deploy the application using Amplify, please run the below command

```bash
amplify publish
```

**Note:** After successful deployment of the application, please update the callback and Signout URL in Cognito user pool with the web application URL.

At this stage the application is still non-functional as it needs to be updated with the configuration below.

### Configure the application

In `src/App.js` you can enter the configuration parameters as follows:

```js
Amplify.configure({
  Auth: {
    region: "<enter the region here>",
    userPoolId: "<enter the cognito user pool id here>",
    userPoolWebClientId: "<enter the applicaiton client id>",
    oauth: {
      domain: "<enter here the amazon cognito domain>",
      scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
      redirectSignIn: "<enter here the amplify hosted url>",
      redirectSignOut: "<enter here the amplify hosted url>",
      responseType: "code"
    }
  },
  API: {
    endpoints: [
      {
        name: "MyBlogPostAPI",
        endpoint: "<enter here the API gateway endpoint url>"
      }
    ]
  }
});
```

Also, you need to select the right Identity Provider Name as configured on Amazon Cognito. To do so, please modify the `const` variable, also located in the `src/App.js` file:

```js
const federatedIdName =
  "<name of the Identity Provider as configured in Cognito>";
```

Once you set the right values you are ready to publish your code to amplify. You can submit your changes by running the following command

```bash
amplify publish
```
