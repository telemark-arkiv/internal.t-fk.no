#internal.t-fk.no

The server for Telemark fylkeskommune's internal APIs.

Every API is a separate plug-in.

##Installation

Clone from GitHub.

```
$ git clone git@github.com:telemark/internal.t-fk.no.git
```

cd into local directory and install dependencies via npm

```
$ npm install
```

run setup

```
$ npm run setup
```

Start the server

```
$ npm start
```


##Test

```
$ npm test
```

##Development

To develop a plug-in use the [tfk-plugin-seed](https://github.com/telemark/tfk-plugin-seed) as base.

Add the finished plug-in to dependencies in package.json and register the plug-in in server.js
