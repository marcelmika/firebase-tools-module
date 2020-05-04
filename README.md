# Firebase Tools Module

Wrapper library that lets you use `firebase-tools` as a NodeJS module.

## Install

```sh
$ npm i firebase-tools firebase-tools-module
```

or

```sh
$ yarn add firebase-tools firebase-tools-module
```

## Usage

### Cloud Functions Commands

[Read more](https://github.com/firebase/firebase-tools#cloud-functions-commands)

#### Config

```js
import { functions } from "firebase-tools-module";

// Project ID is required
const project = "your-firebase-project";

// Get single configuration value
const value = await functions.config.get("path.to.config.value", {
  project,
});

// List all configuration values
const list = await functions.config.list({
  project,
});

// Set configuration values
await functions.config.set(
  {
    "path.to.config.value1": "value1",
    "path.to.config.value2": "value2",
  },
  {
    project,
  }
);

// Unset configuration values
await functions.config.unset(
  ["path.to.config.value1", "path.to.config.value2"],
  {
    project,
  }
);
```
