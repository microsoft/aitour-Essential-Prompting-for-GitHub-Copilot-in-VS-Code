# Expanding Our Instructions

Augmenting Git commit messages is only the first step - there's more we can do, including adding instructions for:

 - Code generation, which covers replies in the chat pane, inline terminal, and edits.
 - Code review.
 - Test generation.

We won't cover the last two, but it's good to know they're there.

## Adding File References Instead of Text

Using the `copilot-instructions.md` file is useful, but `settings.json` allows you a lot more flexibility. You can add your instruction as text, which we did for our Git commit messages, or you can add them as individual files.

There is a `docs` directory in the resources for the project. Add it to your workspace now.

In this directory, there are three files:

 - `javascript-style.md`, which are the code styles we need to use for our project.
 - `database-style.md`, which describe how database tables should be created.
 - `testing.md`, which describes how we like our tests written.
 - `spec.md`, which is the specification for our initial sprint.

Now, add this to `.vscode/settings.json`:

```json
  "github.copilot.chat.codeGeneration.instructions": [
    {
      "file": "./docs/database-style.md"
    },
    {
      "file": "./docs/javascript-style.md"
    },
    {
      "file": "./docs/testing.md"
    },
    {
      "file": "./docs/spec.md"
    },
  ],
```

Now, when you use chat, edits, or terminal inline, these files will be added as context.

The `spec.md` file is of particular interest because it summarizes what we're doing in our first sprint. You can update this as needed throughout the life of your project. Look over this file and see the details.

## Generating a SQLite Database and Test Data

Let's have Copilot generate the initial schema for our development database:

```
create the SQL schema for our development database and put it into a `schema.sql` file.
```

Copilot will think for a second, and then hand you back a very detailed SQL schema for SQLite3. Look over the response! The styles from our database styles should be implemented, as well as a set of tables for our sprint.

## Using the SQL File as an Instruction

Now we'll generatge our data access using a very simple command: `create the data models for the project`. This will take a few minutes.