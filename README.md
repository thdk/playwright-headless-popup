# Repro to investigate why google login popup doesn't open in headless playwright test

Repos used for authentication and styling the google button:

https://github.com/anthonyjgrove/react-google-login

https://github.com/prescottprue/react-google-button


## packages/login-app

Demo react app containing some google login buttons.

**Default react-google-login**

http://localhost/login1

**react-google-login with custom render function returning a google-login-button component**

http://localhost/login2

**react-google-login with custom render function returning a native button**

http://localhost/login3


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

