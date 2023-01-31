import os

project_name = input("Enter the project name: ")

os.makedirs(project_name)

os.chdir(project_name)

os.makedirs("src")

os.makedirs("src/components")


os.makedirs("src/components/css")


os.makedirs("src/components/data")


os.makedirs("src/pages")


os.makedirs("src/pages/css")


os.makedirs("src/redux")


with open("inf.tsx", "w") as f:
    f.write("")


os.system("npm init -y")
os.system("npm install react-router-dom @types/react-router-dom react-redux @types/react-redux react-helmet @types/react-helmet material-ui @types/material-ui @material-ui/icons")

# Create the index.tsx file
index_content = f"""
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(() => {{}});

function {project_name}() {{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}}

export default {project_name};
"""

with open("src/index.tsx", "w") as f:
    f.write(index_content)

# Create the App.tsx file
app_content = f"""
import React from 'react';

function App() {{
    return <div>Hello World!</div>;
}}

export default App;
"""

with open("src/App.tsx", "w") as f:
    f.write(app_content)

print("React project initialized successfully!")
