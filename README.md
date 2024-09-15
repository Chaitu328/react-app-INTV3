# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Yes, you’ve summarized the three common ways to use CSS in React accurately. Let’s break them down:

### 1. **Inline Styles**

Inline styles are specified directly in the component using a JavaScript object. These styles are applied to elements using the `style` attribute. They don’t require a CSS file and are scoped to the component.

**Example:**

```jsx
const style = {
    container: {
        textAlign: 'center',
        padding: '30px',
        margin: 'auto',
    },
    title: {
        color: 'green',
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

function MyComponent() {
    return (
        <div style={style.container}>
            <h1 style={style.title}>Hello World</h1>
            <button style={style.button}>Click Me</button>
        </div>
    );
}
```

### 2. **CSS Modules**

CSS Modules allow for modular and scoped CSS. You import the CSS file as an object, where each class name is a property of the object. This avoids global scope issues and prevents class name collisions.

**File: `Xmodel.module.css`**

```css
.container {
    text-align: center;
    padding: 30px;
    margin: auto;
}

.title {
    color: green;
}

.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```

**Component:**

```jsx
import React from 'react';
import styles from './Xmodel.module.css'; // Import the CSS module

function MyComponent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello World</h1>
            <button className={styles.button}>Click Me</button>
        </div>
    );
}
```

### 3. **Global CSS**

Global CSS involves importing a regular CSS file. This method applies styles globally across the application. This approach does not scope styles to components, which can lead to potential conflicts if not managed carefully.

**File: `styles.css`**

```css
.container {
    text-align: center;
    padding: 30px;
    margin: auto;
}

.title {
    color: green;
}

.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```

**Component:**

```jsx
import React from 'react';
import './styles.css'; // Import the global CSS file

function MyComponent() {
    return (
        <div className="container">
            <h1 className="title">Hello World</h1>
            <button className="button">Click Me</button>
        </div>
    );
}
```

### Summary:

1. **Inline Styles:** Use JavaScript objects to define styles directly in the component.
2. **CSS Modules:** Use CSS files imported as objects, providing scoped and modular styles.
3. **Global CSS:** Import a regular CSS file to apply global styles throughout the application.

Each method has its own use cases and benefits depending on the needs of your project.