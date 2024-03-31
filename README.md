# RA Language Galician [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Galician translations for `React Admin`.

## Install

You can install this library via NPM or YARN.

### NPM

```bash
npm i ra-language-galician
```

### YARN

```bash
yarn add ra-language-galician
```

## Use case

You need to have galician translations in your `React Admin` app.

## Usage

The usage is really simple:

1. Define your `i18nProvider`:

```ts
// i18nProvider.ts
import polyglotI18nProvider from "ra-i18n-polyglot";
import galicianMessages from "ra-language-galician";

const messages = {
  gl: galicianMessages,
};

export const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);
```

2. Pass your custom `i18nProvider` to your `React Admin` instance:

```tsx
// App.tsx
import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

export const App = () => {
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  );

  return (
    <Admin locale="gl" i18nProvider={i18nProvider} dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

App.displayName = "App";
```

## Issues

Please, open an [issue](https://github.com/earelin/ra-language-galician/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/earelin/ra-language-galician/blob/trunk/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/earelin/ra-language-galician/blob/trunk/LICENSE) for more information.
