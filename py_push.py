import subprocess
subprocess.run(["git", "add", "src/components"])
subprocess.run(["git", "commit", "-m", "auto commit by py script"])
subprocess.run(["git", "push"])
