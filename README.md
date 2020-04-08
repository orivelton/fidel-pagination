# fidel-pagination
Fidel Pagination

# Fidel coding challenge

## What is Fidel API?

Fidel is an API platform that makes it easy for developers to link payment cards to their applications and receive real-time transaction data.

## Objective

The objective of this test is to verify your front-end skills and introduce you to the Fidel API.

## Task

1. Create a UI that displays transactions fetched from Fidel API (see below).
2. Add pagination using the pagination API (e.g. infinite scroll, load more button etc...)

### Stack

- JavaScript or TypeScript
- React

Please feel free to use your tooling of choice for styling and testing!

### Documentation

- [Documentation](https://docs.fidel.uk/transactions)
- [API Reference](https://reference.fidel.uk)
- [API pagination](https://reference.fidel.uk/reference#pagination)
  - If you are constructing the query parameter string yourself, you may need to use `encodeURIComponent` on the `start` parameter.

### API Access

Use the development stage API https://api-dev.fidel.uk/v1d/.  
- *Test environment secret key:* `sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6`  
- *Program ID* to fetch the transactions from: `2314f371-39b1-4c80-8040-4144ff1bad09`  

You can read more about request headers in the API Reference.

## Questions & support

Should you have any questions, just ask jordan@fidel.uk :)












## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
