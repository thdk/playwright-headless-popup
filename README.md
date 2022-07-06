# Repro to investigate why google login popup doesn't open in headless playwright test

**Update:** popups aren't working in headless browser when the click handler is on a `div` element instead of on a `button` element.

Repos used for authentication and styling the google button:

https://github.com/anthonyjgrove/react-google-login

https://github.com/prescottprue/react-google-button




## packages/login-app

Demo react app containing some google login buttons.

```sh
yarn install
yarn start
```

## packages/e2e

```sh
yarn install
yarn playwright install
yarn test
```

