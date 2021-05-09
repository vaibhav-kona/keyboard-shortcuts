Demo app - https://master.d31i5cqkpfor4z.amplifyapp.com/

## How to use the KeyboardShortcuts component?

3 props are to be passed for the KeyboardShortcuts component.

- combo (:string) Eg: 'shift', 'shift+c', 'shift+b'
- callback(:function) -> a function to be executed when key combo is registered
- description (:string) Details on what the key combo does

Eg :

      <KeyboardShortcuts
        combo="shift+c"
        callback={this.toggleBiggerText}
        description="Toggle bigger text"
      />

- /src/common/KeyboardShortcuts/index.tsx has the common component to add shortcut combos and callbacks.
- Keybindings are unbinded when the component gets unmounted.
- Keyboard shortcuts can be maintained per page by using the reducer in any other app.
- List of the keyboard shortcuts are displayed per page in this sample app.
- https://github.com/dmauro/Keypress hasn't been updated in 3 years. As an alternate, https://github.com/jaywcjlove/hotkeys/ is used as base library for listening to keybindings.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
