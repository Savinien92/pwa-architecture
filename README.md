## PWA Architecture with React Redux and Firebase

This project is a simple **architecture of progressive web app**, it uses firebase for the connection. It is possible to use different firebase services like real database, functions, storage ...
There is also a beginning of back that uses express, to you to write your routes and your models of data.

# Init firebase

To init **firebase**, simply go to **/src/front-end/core/firebase/config.js** and add your firebase project configuration.

https://firebase.google.com/docs/web/setup

# Start front project

You just have to use the command `npm start`.

# Start back project

You just have to use the command `npm server`.

# Run tests

You just have to use the command npm test. The tests are already connected, you need to create a **.test.js** file.
You can find an example in **src/front-end/pages/home**.

# Build

You just have to use the command `npm run build`.

# Test PWA

If you want to test the performance of your PWA you just need to create a build of the project with the command `npm build` then run command `serve -s build` and finally go to the address indicated (ex: http://localhost:5000).

You can test PWA with Lighthouse (https://developers.google.com/web/tools/lighthouse/)

1) Download Google Chrome for Desktop.
2) In Google Chrome, go to the URL you want to audit. You can audit any URL on the web.
3) Open Chrome DevTools.
4) Click the Audits tab.
5) Run Perform an audit