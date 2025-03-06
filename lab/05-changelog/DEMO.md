# Creating a Changelog

Copilot can create a changelog for us based on the commit messages in our repo.

## Part 1: Get the commits

 - Open a terminal and, using inline chat: `how can I save all commit messages to a file?`. You should see the `git log` command come up, with some extra arguments.
 - Tell Copilot you want the file to be called `commits.txt`.
 - There is no git repo in this demo, however you can try this on a project you already have going.

## Part 2: The Changelog

Copilot will use the context from open editor and terminal windows, so close all of those before proceeding.

  - Create a new file called `CHANGELOG.md`
  - Open the chat window: `using #file:commits.txt create a CHANGELOG`.
  - Add the message: `remove dependabot and Bump messages`
  - Next: `make all messages grammatically correct, remove offensive words, and be as detailed as possible.`
  - Add `add emoji where possible`
  - Accept the changes and you're done.
  


