--
# Brainstorming Architecture

You can use Copilot to think through the code you want to write, without actually writing it. Use the README in this directory. In this demo, we’re going to introduce variables.

  - Open the chat window and ask: `use the #file:README.md and go over the architectural choices I have to build this application. Start with simple.`
  - You will see a project structure. Ideally it's visual, but Copilot could also show you a bash script for creating the structure.
  - *If no visual diagram*: `describe this visually`.
  - You will likely see a `controllers` directory. If so, `remove controllers`. If you don't see one, `add controllers`. The idea is that this is a conversation.

## Part 2: Using the SQL File for the Models

  - We can also use a SQL file to give Copilot context for our models: `using #codebase, create a sample domain model using Sequelize`. You can change out for whatever ORM you're comfortable with.
 - Review the generated code, noting how Copilot was able to understand types, etc.

## Bonus Content
If you have the time, you can ask Copilot to generate everything in a shell script. This is a *volatile* demo, and sometimes works perfectly, other times crashes. You can let the audience know and see if you can get them to push you.

  - Ask for a shell command to create the file structure: `provide a bash/ps shell command to create the structure and code. Provide the source code for these files as well`. Choose bash or ps based on your OS.
  - Click the “Run in Terminal” button in the chat window. Show the completed project structure.