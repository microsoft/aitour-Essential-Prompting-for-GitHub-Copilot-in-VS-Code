# Refactoring and Documenting

Copilot is pretty good at refactoring your code, as well as providing complete documentation.

There is a code file which you can work with, `code.js`, which has questionable string manipulation happening. We can make this a bit more modular by:

 - Turn the code into a module we can use in a Node.js project by using inline chat at the top of the file (CTRL-I), `turn this into a module`. Copilot should refactor.
 - Our boss doesn't like regular expressions, so using inline chat one more time: `remove regex`. Copilot should refactor one of the functions.
 - Document the code using `/doc`. Don't accept, just note the completeness.
 - Add emoji to the code using `/doc with emoji`. Accept the change
 - Add tests using `/tests`. A new file will be created, accept it. It will likely use `console.log` for the tests, and that's OK.
 - Run the file using `node code.tests.js` and see if it works. There might be an error, which is OK, Copilot isn't perfect. It does get you down the path quickly, however.
 - Back in `code.js`, use inline chat once more: `/tests using mocha`. You should now see a test suite for the mocha testing framework.
 