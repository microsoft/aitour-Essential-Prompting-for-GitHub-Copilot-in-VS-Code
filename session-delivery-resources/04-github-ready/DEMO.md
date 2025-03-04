# Prepping for GitHub and Open Source

This is where we enter experimental territory, so be prepared! To that end:

 - Have the GitHub CLI installed
 - Warn the audience.. we're about to use Agent mode, which is experimental and might fail.

## Adding the Files We Want

We're about to prepare our project for Open Source, which means we need:

 - a LICENSE file
 - a README
 - All the "extra" files, including contribution guidelines, code of conduct, etc.

We can use Copilot to do this for us, which is tons of fun.

 - Open up Copilot Edits.
 - Add the following prompt: `generate the markdown files that a reputable open source project would have on GitHub. Make me look like a pro`.

Copilot _should_ generate a README, LICENSE, CONTRIBUTION, SECURITY, CODE_OF_CONDUCT, etc. If any of these are missing, prompt for more.

 - Go through these new files. 
 - "Copilot isn't here to do everything, just get you started"
 - Point out the places where fixes are needed (such as the LICENSE and README)

Ask if anyone has any questions, we're about to bring this home...

 - Create a new session in Copilt Edits.
 - Ask: `create a gitignore`. Notice how Copilot creates the exact one your project needs! If you already have one, you can skip this part.
 - Open up Copilot Chat.
 - Ask: `initialize the project in this directory and add the needed packages from npm`.

Copy the command and make sure the project is initialized. Commit your changes.

## Optional! Only use if Agent is available...

We're going to use an Agent for this, which will be fun!

 - Commit your code to Git using the message generation.
 - Open Copilot, choose edits, and ensure "Agent" is selected instead of "Edit"
 - Add the following prompt: `create the project and install the packages for the project using npm. create the needed markdown files for an open source project (detailed README, COC, Contributing, Security, MIT License). Use lots of emoji for the new markdown files.`
