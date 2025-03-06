# Brainstorming Architecture

Copilot can help you think about your project structure, getting you off the ground quickly.

You have two files in this demo: `SPEC.md` and `contoso_music.md`. The first file is a quick specification for a new app we want to create. The second is the Chinook sample database that we're using for Contoso Music.

  - Open the chat window and ask: `use the #file:README.md and go over the architectural choices I have to build this application. Start with simple.`
  - You will see a project structure. Ideally it's visual, but Copilot could also show you a bash script for creating the structure.
  - *If no visual diagram*: `describe this visually`.
  - You will likely see a `controllers` directory. If so, `remove controllers`. If you don't see one, `add controllers`. The idea is that this is a conversation.

Have some fun with the conversation. You could try things like "Use CQRS" or "I want to use Hexagonal Architecture".

## Part 2: Using the SQL File for the Models

  - We can also use a SQL file to give Copilot context for our models: `using #codebase, create a sample domain model using Sequelize`. You can change out for whatever ORM you're comfortable with.
 - Review the generated code, noting how Copilot was able to understand types, etc. It can even do relationships!

## Bonus Content

Copilot can also generate the code for you via shell scripts. If you're on Mac or Linux, you can ask for bash scripts. Windows should use Powershell.

  - Ask for a shell command to create the file structure: `provide a bash/ps shell command to create the structure and code. Provide the source code for these files as well`. Choose bash or ps based on your OS.
  - Click the “Run in Terminal” button in the chat window.

You should see your project set up for you. 