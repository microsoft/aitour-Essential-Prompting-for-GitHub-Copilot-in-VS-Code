--
# Refactoring and Documenting

The focus of this demo is to show how quick you can refactor with Copilot, and then document your code.

 - Drag `code.js` into your demo project.
 - Discuss the methods that you see. 
 - Document the code using `/doc`. Don't accept, just note the completeness.
 - Add emoji to the code using `/doc with emoji`. Accept the change
 - Turn the code into a module we can use in a Node.js project by using inline chat at the top of the file, `turn this into a module`. Copilot should refactor.
 - Add tests using `/tests`. This could be volatile, but it's worked 95% of the time. A new file will be created, accept it. It will likely use `console.log` for the tests, and that's OK.
 - DO NOT RUN the tests. The point isn't that they work, it's that they've been created for you to build on top of.
 - Back in `code.js`, use `/tests using mocha` to show how tests can be written using Mocha.js instead of `console.log`.
 