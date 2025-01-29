# TodoApp

## Git Help

Open a terminal and run the following command. This will create a new folder `TodoApp` in your root directory that is a copy of this repository.

```
git clone https://github.com/sigdotcom/TodoApp
```

Open the `TodoApp` folder with your favorite code editor. If you have VSCode installed, it has this handy command to open it from the terminal.

```
code TodoApp
```

## Git Basics

Git is a version control system that allows you to work on an individual feature without affecting the main codebase. It does this through branches.

To create and switch to a new branch, run the following commands.

```
git checkout -b my-branch
git push -u origin my-branch
```

You are now working off of the branch `my-branch`. This is where you'll work on your feature until it's finished.

To send your changes back to this remote repository for others to see, run the following commands.

```
git add .
git commit -m "My changes"
git push
```

These will add and commit your changes locally, then send those changes to the corresponding branch here.

For more practicing using git, a tutorial is located [here](https://learngitbranching.js.org/?locale=en_US).
