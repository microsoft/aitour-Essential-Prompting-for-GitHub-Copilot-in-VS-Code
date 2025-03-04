# Expanding Our Instructions to Work With Data

Augmenting Git commit messages is only the first step - there's more we can do, including adding instructions for:

 - Code generation, which covers replies in the chat pane, inline terminal, and edits.
 - Code review.
 - Test generation.

We won't cover the last two, but it's good to know they're there.

## Adding File References Instead of Text

Using the `copilot-instructions.md` file is useful, but `settings.json` allows you a lot more flexibility. You can add your instruction as text, which we did for our Git commit messages, or you can add them as individual files.

There is a `docs` directory in the resources for the lab. Add it to your workspace now.

In this directory, there are three files:

 - `javascript-style.md`, which are the code styles we need to use for our project.
 - `database-style.md`, which describe how database tables should be created.
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
      "file": "./docs/spec.md"
    },
  ],
```

Now, when you use chat, edits, or terminal inline, these files will be added as context.

The `spec.md` file is of particular interest because it summarizes what we're doing in our first sprint. You can update this as needed throughout the life of your project. Look over this file and see the details.

## Generating a SQLite Database and Test Data

Let's have Copilot generate the initial schema for our development database. This will be easier than it sounds because we've loaded Copilot up with a ton of context.

For this, we'll use a different tool within Copilot: _Copilot Edits_. You'll see a document icon right next to the chat icon (or the term "COPILOT EDITS" if you're using VS Code Insiders). Choose "Edits".

In the input, prompt:

```
create the SQL schema for our development database and put it into a `schema.sql` file.
```

This is a very terse prompt! Copilot will think for a second, and then hand you back a very detailed SQL schema for SQLite3. Look over the response! The styles from our database styles should be implemented, as well as a set of tables for our sprint.

In particular, notice:

 - Auto-incrementing primary keys.
 - The `TEXT` data type for string values (a PostgreSQL optimization).
 - Timestamp fields `created_at` and `updated_at`.
 - Fields that correspond to the `spec.md` document.

Copilot did all of these things because they were specified in our style file (`database-style.md`) and our spec.

 - Open the source control window and generate your commit message. Notice again how detailed this is!
 - Commit your changes.

## Using the SQL File as an Instruction

Instructions don't need to be text! They can also be code, specifically:

 - You can use a SQL file to let Copilot know the schema of your database.
 - Add a code template for a database model, service class, or test structure.

Let's use our new SQL file and see what we can get up to:

 - Open up `.vscode/settings.json`
 - Add the instruction for the new SQL file:

```json
  "github.copilot.chat.codeGeneration.instructions": [
    {
      "file": "./docs/database-style.md"
    },
    {
      "file": "./docs/javascript-style.md"
    },
    {
      "file": "./docs/spec.md"
    },
    {
      "file": "./db/schema.sql"
    },
  ],
```

We don't need to tell Copilot anything else, it will understand that it's seeing table definitions.

Now comes the fun part:

 - Open up Copilot's Edits window and create a new session (the plus icon at the top)
 - Close the open editor windows
 - Add a simple prompt: `create the data models for the project`. 

This will take a few minutes and you should see a number of files created for you. These are Sequelize (a JavaScript ORM) models, which is the ORM our project is using.

How does Copilot know that? And moreover, how does Copilot know how to generate these models?

 - Open up the `docs/javascript-styles.md` file and see if you can find the model templates.
 - Open up the `docs/spec.md` file and find the specification for the stack.

Copilot is able to weave this information together to generate a very compelling data access layer for us!

 - Open up the source control window and generate the commit message. So much fun isn't it!
 - Commit your changes.

## Some Perspective

We did a lot in this demo, but one thing to keep in mind is that _Copilot is not perfect_. It's not here to do the work for you, just to get you started. Go in small steps, and make sure you inspect everything that's created.

Copilot gets you from A to S or so, you take it to Z.

Play around a bit! You can tweak some of the styles and templates to see what you can get Copilot to create for you. Maybe you want a lot more comments? Add it to the spec! Maybe you want some emojis in there too... try it!