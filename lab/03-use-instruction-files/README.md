- COPY DOCS FOLDER TO ROOT OF PROJECT

- ADD to *settings.json* file to make copilot aware of the new files:

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

  In all future prompts these files will be consulted by Copilot.

## EDIT MODE

Have Copilot generate the initial schema for the development database:

- Create the SQL schema for our development database and put it into a *schema.sql* file.
- ADD TO THE *schema.sql* file to *settings.json*

- Create test data:

  > Prompt: Create some test data. Create 10 products that are obviously fake and have some fun, not too much fun.

## RUN SQL FILEs

**in-line Copilot in the terminal**:

- Run the sql files in the */db* directory. 
- Create a test sqlite database called */db/dev.db* and include the test data file *db/test_data.sql*.

  Response should look something like this:

    ```sh
    mkdir -p db && sqlite3 db/dev.db < db/schema.sql && sqlite3 db/dev.db < db/test_data.sql
    ```

    - This ends up creating a directory db. 
    - Inserting a schema to a sqlite db stored at *db/dev.db*.
    - Populating the database with the content in `test_data.sql`.

- SHOW .SQL FILES ARE STILL IN THE SOURCE CONTROL WINDOW..

  As a result, use Copilot to create a *.gitignore*

  > [!NOTE]
  > It will typically not get this correct so you will need to edit it and make sure *.sql is included and ensure it is removed from the source control window.

## GENERATE DATA ACCESS MODELS FOR THE PROJECT:

Go through the generated code and ensure it is matching the coding standards for the project outlined in the */docs*.

> Prompt: generate the data access models