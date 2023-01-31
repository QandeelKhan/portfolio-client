import subprocess

packages = ["react-redux", "@types/react-redux", "react-router-dom", "@types/react-router-dom",
            "react-helmet", "@types/react-helmet", "material-ui", "@material-ui/icons"]

for package in packages:
    subprocess.run(["npm", "install", "--save", package])

print("All required packages have been installed successfully!")
