# Demonstrate custom instructions

- COPY & PASTE THE BELOW TEXT INTO *copilot-instructions.md*

```text
## Project Outline

### Spec
TBD

## The Stack

This application will use the following:

- JavaScript programming language, following best practices
- SQLite as the database for development (stored in the db directory) and testing (in-memory only)
- PostgreSQL database for production
- All connection strings will be stored in a local .env file
- Use Jest for testing
- Use Sequelize for data access

## Coding Standards for Javascript

- All models will be classes with singular naming (i.e. User for the users table)
- All code is indented with 2 spaces
- All code files will be lower case with underscores.
- Markdown files will be lower case with hyphens.
- All application logic will go in the lib directory. Copilot should NEVER generate the code for logic. Only COMMENTS as to what should go where.
- All database-related stuff will go in the db directory (models, schema, SQLite files)
- All configuration will be done with environment variables, using a .env file.
- Do not export a class directly, use module method instead to create the instance you need (aka "factory")
```

- DELETE *copilot-instructions.md* and add the following to *settings.json* instead to see how copilot works with git commit messages:

  ```json
  "github.copilot.chat.commitMessageGeneration.instructions": [
    {
      "text": "Be as detailed as you can with the files changed, the reason for the change. Add lots of emoji."
    }
  ],
  ```

  This instruction will override instructions *copilot-instructions.md*.