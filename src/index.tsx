import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();

// babel converted output, to make it javascript compatible/understandable form.
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { store } from "./redux/store";
// import { Provider } from "react-redux";
// below line added automatically because using new JSX transform introduced in React 17. This transform allows us to use JSX syntax without importing React in every file. Instead, it imports the jsx function from the react/jsx-runtime module, which is a helper function that creates React elements from JSX elements. The jsx function renamed as _jsx to avoid conflicts with other variables in your code12. imported as _jsx to save project from name conflict with any other import in project as jsx
// import { jsx as _jsx } from "react/jsx-runtime";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   /*#__PURE__*/ _jsx(React.StrictMode, {
//     children: /*#__PURE__*/ _jsx(Provider, {
//       store: store,
//       children: /*#__PURE__*/ _jsx(App, {})
//     })
//   })
// );
// reportWebVitals();

// The reason why the babel converted code is wrapped in the _jsx function in the return statement is because that is how the JSX syntax is transformed into plain JavaScript code that can be understood by the browser. The _jsx function takes two arguments: the type of the element and the props of the element. The type of the element can be a string (such as “div” or “h1”) or a React component (such as App or Provider). The props of the element are the attributes that you pass to the element, such as store or children. The _jsx function returns a React element, which is an object that describes what the UI should look like4.
// The comment-like thing that is added before the _jsx function is called the /*#__PURE__*/ annotation. This annotation is a hint for minifiers like UglifyJS or babel-minify to perform dead code elimination. Dead code elimination is a process of removing unused or unreachable code from the output. The /*#__PURE__*/ annotation tells the minifiers that the _jsx function is side-effect free, meaning that it does not modify any external state or cause any observable changes. Therefore, if the return value of the _jsx function is not used anywhere, it can be safely removed from the output. This can improve the performance and size of your code56.
// The reason why each component is treated as “children” is because that is how the JSX syntax represents the content of an element. The children of an element are the elements or text that you put inside the element. For example, in the JSX code <Provider store={store}><App /></Provider>, the <App /> element is the child of the <Provider> element. The children of an element are passed as a special prop called “children” to the _jsx function. For example, the JSX code <div><h1>Hello</h1><p>World</p></div> is equivalent to the JavaScript code _jsx("div", { children: [_jsx("h1", { children: "Hello" }), _jsx("p", { children: "World" })] }). The children prop can be an array of elements or a single element or text7.
