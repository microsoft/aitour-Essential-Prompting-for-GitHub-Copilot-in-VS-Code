# The Best Prompt is the One You Don't Have to Write

One of the challenges of using an AI tool like GitHub Copilot is that you need to know _how_ to ask the right question so you can get a relevant answer.

The Python `for loop` question is very basic. Let's ask something a bit more detailed, such as "how do I access a database".

## The Problem: Figuring Out The Right Question

We might start by asking this exact question: `how do I access a database` and the answer would, once again, be generic. We might then move on to `how do I access a database in JavaScript?` and get a more relevant answer.

Skipping ahead, we might have to ask several questions before we narrow down the replies with a prompt that might read like this:

```
how do I access a SQLite3 database in JavaScript using a connection string that is stored in an env file? I want different connections based on the environment - test, development, or production. Test should be memory only, development on local disk, and production should use PostgreSQL, not SQLite
```

It takes practice to know what details to give Copilot, but there is a simpler way that can also benefit your team.

## Adding Custom Instructions Using the GitHub directory

You can "pre-prompt" Copilot by setting up context in a special file called `copilot-instructions.md`:

 - Create an empty workspace with VS Code
 - Add a directory named `.github` and, within it, a file called `copilot-instructions.md`.

Now that we have this file, add the following markdown (or drop in the file in the resources):

```md
## Project Outline

## Spec

TBD

## The Stack

This application will use the following:

 - JavaScript programming language, following best practices
 - SQLite as the database for development (stored in the `db` directory) and testing (in-memory only)
 - PostgreSQL database for production
 - All connection strings will be stored in a local `.env` file
 - Use Jest for testing
 - Use Sequelize for data access

## Coding Standards for Javascript

 - All models will be classes with singular naming (i.e. `User` for the `users` table)
 - All code is indented with 2 spaces
 - All code files will be lower case with underscores.
 - Markdown files will be lower case with hyphens.
 - All application logic will go in the `lib` directory. Copilot should NEVER generate the code for logic. Only COMMENTS as to what should go where.
 - All database-related stuff will go in the `db` directory (models, schema, SQLite files)
 - All configuration will be done with environment variables, using a `.env` file.
 - Do not export a class directly, use module method instead to create the instance you need (aka "factory")
```

GitHub Copilot will automatically prepend these instructions to any chat, edit, or inline terminal prompt (which will discuss later). 

Let's try it out! Add this prompt:

```
how do I access the development database?
```

Notice how small are prompt has become? In the chat response, also notice:

 - "Used 1 reference" shows that our instructions were added to the request.
 - Copilot will confirm it's using these instructions with its response.
 - You will see detailed instructions on how to set up the connection, the code required for Sequelize, etc.

The clearer the instructions, the smaller the prompt and the better the results.

## Adding Custom Instructions Using Workspace Settings

There is another, more flexible way to create custom instructions for Copilot. Let's do that, and see why it's useful:

 - Open the command palette using CMD-SHIFT-P on a Mac, or CTRL-SHIFT-P on Windows.
 - Type in "workspace settings". You should see a command to "Open Workspace Settings". Select this.
 - You will now have a `.vscode` directory with a `settings.json` file within.

Before we do anything here, let's create a Git repository and generate a commit message - WITHOUT actually committing anything:

 - Open up the source control pane by clicking the source control icon in the left menu bar.
 - Click "Initialize Repository"
 - In the message box, click the icon to the far right that looks like two small stars. This is the "AI Generator" icon.
 - Notice the commit message that is generated. DO NOT commit this! We'll do that next.

The commit message that's generated is decent, but let's see if we can make our future life a little better by adding some details.

 - Go back to the `.vscode/settings.json` file and open it, if it's not open already. Add this setting:

```json
  "github.copilot.chat.commitMessageGeneration.instructions": [
    {
      "text": "Be as detailed as you can with the files changed, the reason for the change. Add lots of emoji."
    }
  ],
```

This instruction is _specific_ to Git commit message generation. 

 - Go back to the source control window and generate the message once again. You should see a much more detailed message! If the message doesn't change, be sure you've saved your `settings.json` file, clear out the existing message, and try again.

Augmenting your commit messages like this is a tremendous timesaver, and ensures that your messages follow whatever guidance your team has set for your project.

## Commit Your Changes

As you go through each demo, be sure to commit your changes to your local repo as we'll be using that later.

## Helpful Tip

You can add JSON code snippets for individual instructions - they're in the lab if you want to copy them.