# Prepping for GitHub and Open Source

We're about to prepare our project for Open Source, which means we have to make it look sharp. We're going to add the basic files we'll need (README, COC, etc) and make them look spiffy.

If you're using VS Code Insiders, you can skip down below and get crazy using "Agent Mode", which is an experimental new feature with VS Code. If you want to try it, skip these first steps and pop on down!

## Copilot Edits Only

If you don't have insiders, follow this process.

We're about to prepare our project for Open Source, which means we need:

 - a LICENSE file
 - a README
 - All the "extra" files, including contribution guidelines, code of conduct, etc.

We can use Copilot to do this for us, which is tons of fun. If you're only using Edits, 

 - Open up Copilot Edits.
 - Add the following prompt: `generate the markdown files that a reputable open source project would have on GitHub. Make me look like a pro and use lots of emoji and badges`.

Copilot _should_ generate a README, LICENSE, CONTRIBUTION, SECURITY, CODE_OF_CONDUCT, etc. If any of these are missing, prompt for more.

 - Go through these new files. They look pretty nice, don't they!
 - Edit the LICENSE file to ensure that it has your correct information.
 - Go through the README and other files and notice how complete they are, but also notice they need to be updated.

Copilot is here to get you off the ground and into the sky - you have to take yourself into orbit.

Let's keep rolling as there is more we need to do:

 - Create a new session in Copilt Edits.
 - Ask: `create a gitignore`. Notice how Copilot creates the exact one your project needs! If you already have one, you can skip this part.
 - Open up Copilot Chat.
 - Ask: `initialize the project in this directory and add the needed packages from npm`.

You should see the command `npm init -y && npm install (long package list)`. Copilot is able to determine which packages you need based on your spec and style files. Copy this command into the terminal and run, or have Copilot do it for you by selecting the "Run In Terminal" command right by the code.

Finally, open up source control and commit your changes, we're done!

## Extra Credit

You can ask Copilot to give you the command to extract your commit messages into a text file and then turn that text file into a `CHANGELOG.md`.

Give it  whirl! Be sure to add lots of emoji like the pros do.

## Optional: Getting Crazy with Agent Mode

Before we start, you need to:

 - Have the GitHub CLI installed and authenticated.
 - Be prepared to think on your feet! This is cutting-edge stuff.

We're going to use an Agent for this, which will be fun!

 - Commit your code to Git using the message generation.
 - Open Copilot, choose edits, and ensure "Agent" is selected instead of "Edit"
 - Add the following prompt: `create the project and install the packages for the project using npm. create the needed markdown files for an open source project (detailed README, COC, Contributing, Security, MIT License). Use lots of emoji for the new markdown files.`

You should now be stepping through an interactive dialog that will be executing things in order. As a reminder: _this is experimental_ and you might encounter problems! That's OK, you can always tell Copilot "skip this" or "that didn't work, try again".

Once that's finished, see if you can get the Agent to finish off the project as described above. Use some creative prompting - this one is up to you!
