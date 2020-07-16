# Don't Wait — Vote

_Don't Wait — Vote_ is a criminal justice ballot guide that holds politicians accountable.

## Project Structure

```
.
├── public/
│   ├── index.html        // The app's 'entry point' to static html
│   ├── favicon.ico       // The tab icon
│   ├── apiKeys.js        // Safe storage for API keys, should NEVER appear in Github
│   ├── manifest.json     // Setting for Web App Manifest
│   ├── robots.txt        // Instructions for web crawlers, import for search engines
|   └── ...
|
├── src/                  // 'src' stands for source, where we keep the app
│   ├── Components        // The pieces of the app's visual interface
│   │   └── ...
│   ├── Hooks             // Stateful logic, mostly about data manipulation
│   │   └── ...
│   ├── Icons             // All logos, images, and icons
│   │   └── ...
│   ├── Contexts          // Where we store variables for global use
│   │   └── ...
│   ├── Utils             // Helper functions to do repeated tasks
│   │   └── ...
|   ├── App               // The "top-level" component, houses everything elese
│   │   └── App.jsx
│   └── Index.js          // The root, it holds App.jsx
|
├── package.json          // A list of dependencies that the web app requires
├── README.md             // The instruction manual!
└── ...
```

## Development

### [Prototyping Notebook](https://observablehq.com/@elibenton/ballotready-api)

_Please check this [Observable Notebook](https://observablehq.com/@elibenton/ballotready-api) before going any further! It contains everything you need to know about how this web app is going to work!_

### Starting From Scratch! (for the first timers ❤️)

**First:** _Download a code editor_

We're going to use [VSCode](https://code.visualstudio.com/) because it has great presets for web development.

**Second:** _Clone the repo_

Once you're in VSCode, type the command `control (⌃)` + `~`. This will bring up a new Terminal window, where you can enter the necessary commands! Go ahead and enter the one below (feel free to copy and paste).

`git clone https://github.com/colanderworld/voter-quotient.git`

**Third:** _Add all the dependencies_

Type `cd voter-quotient` to go inside the `voter-quotient` directory.

Then type `yarn` or `npm install -g` to add all the dependencies.

**Forth:** _Run the development server_

Type `yarn start` and navigate to `localhost:3000` in your web browser!

_**Note:** I also recommend a few super helpful plugins!_

- **[Emmet](https://www.emmet.io/) (built in)** for powerful snippets and smart code wrapping
- **[Prettier](https://github.com/prettier/prettier-vscode)** to "format on save" and keep my code looking consistent
- **[Git Graph](https://github.com/mhutchie/vscode-git-graph)** because I need to visualize git branches
- **[FiraCode](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)** for it's font ligature support

### 📚 Tools & ⚓️ Hooks

_This web app uses [Custom Hooks](https://reactjs.org/docs/hooks-custom.html). No classes here!_

- [React](https://reactjs.org/) for declarative and functional UI.
- [SWR](https://swr.vercel.app/) for automatic and reactive data fetching.
- [Grommet.io](https://v2.grommet.io/components) for painless responsive layout and global theming.
- [Reach Router](https://reach.tech/router) for lightweight and simple routing.
- [usePlacesAutocomplete](https://github.com/wellyshen/use-places-autocomplete) by Welly Shen. Welly's Hook for the Google Maps API is easy to use and saves money!
- [usePosition](https://github.com/trekhleb/use-position) by Oleksii Trekhleb. Oleksii's Hook is simple to use and allows for high accuracy geolocation!
- _useLocalStorage_

### 🗄 The Data

#### BallotReady API

[Their documenation](https://developers.civicengine.com/docs/api)

#### Google Civic Info API

[Their reference](https://developers.google.com/civic-information/docs/v2)

#### MIT Election Lab

[Their data](https://electionlab.mit.edu/data)

## Demployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8e24797-a3f1-4190-9ea1-03f3ecf72326/deploy-status)](https://app.netlify.com/sites/vote4change/deploys)

This web app is deployed with [Netlify](https://www.netlify.com/) and utilizes some of their best features.

- [Continuous Deployment](https://www.netlify.com/products/build/)
- [Edge CDN](https://www.netlify.com/products/edge/)
- [Server-Side Analytics](https://www.netlify.com/products/analytics/)
- [Automatic TLS by Let’s Encrypt](https://docs.netlify.com/domains-https/https-ssl/)

## Example Component

The general structure of a component in this codebase looks like this.

```jsx
import React, {useContext } from 'react'
import { Box , ResponsiveContext } from 'grommet'
// ... more imports ...

export default (props go here) => {
// ... component logic with react hooks ...

  return (
    <ResponsiveContext.Consumer>
      <Box>
        <StyledComponent/>
      </Box>
    </ResponsiveContext.Consumer>
  )
}

// often there is no need for styled components
const StyledComponent = styled(Component)`
  font-size: 1em;
`

```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

#### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note:** _This is a one-way operation. Once you `eject`, you can’t go back!_

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
