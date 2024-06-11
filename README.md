# Progressive Web App Proof of Concept (PWA POC)

## About
* Author: Alex Alden Weaver
* Modified from template: https://github.com/MengLinMaker/PWA-Vite-React-Boilerplate
* Following tutorial: https://mobile.health.mil/dha-tutorial/#/

## Instructions to Run Locally
1. Download code locally & move to desired location.
2. Use Terminal or IDE to navigate to file folder.
3. Run `npm install` to install npm package dependencies.
4. Run `npm run dev` to run locally.
5. The program will run on `http://localhost:5173/`.
NOTE: There is no PWA functionality in development mode.

## Instructions to Build for Deployment
1. Follow Steps 1-3 from local instructions above
2. Run `npm run build` to create production files
3. The publish directory will be `./dist`

## Instructions to Run Production Build Locally
1. Follow "Instructions to Build for Deployment"
2. Run `npm run preview`
3. The program will run on `http://localhost:4173/`

## About the Boilerplate Template

### Boilerplate Techstack
This boilerplate is already preinstalled with:
* *[Vite Plugin PWA](https://vite-plugin-pwa.netlify.app/)* to generate the manifest JSON for *[progressive web app (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)*.
* *[Vite.js](https://vitejs.dev/)* frontend tooling to build for production.
* *[React.js](https://reactjs.org/)* with TypeScript support.
* *[Sass](https://sass-lang.com/)* CSS preprocessor. To uninstall, type: ```npm uninstall sass``` in terminal.
* *[Github Action](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)* for continuous integration and codeql analysis.


### Development
The following terminal commands are from *[Vite.js command line interface](https://vitejs.dev/guide/#command-line-interface)*. Also check the *[package.json](https://github.com/MengLinMaker/PWA-Vite-React-Boilerplate/blob/main/package.json)* file "scripts" section for all command line scripts.

Note: *[npm](https://www.npmjs.com/)* can also be replaced with *[yarn](https://yarnpkg.com/)* or *[pnpm](https://pnpm.io/)*...


#### Run development website locally
```
npm run dev
```
* There is no PWA functionality in development mode.


#### Build production files - to "dist" folder
```
npm run build
```
* Ensure there are no TypeScript errors, otherwise complilation will be aborted.
* Build files will be placed in the "dist" folder by default.
* To change build folder, add this line to *[vite.config.ts](https://github.com/MengLinMaker/PWA-Vite-React-Boilerplate/blob/main/vite.config.ts)* `defineConfig`:
```javascript
build: {
  outDir: './build-directory'
},
```

#### Run production build website locally
```
npm run preview
```


## Modifications to the Boilerplate Template

### TailwindCSS
1. TailwindCSS does not support Sass, so move code from `App.scss` to new `input.css` file
   - https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
2. Install TailwindCSS: https://tailwindcss.com/docs/installation
3. Organize `input.css` & `output.css` into `src/styles` folder
4. Building TailwindCSS: `npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch`