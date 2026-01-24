## The League’s Blueprints: ByteStrike Mission Protocol
### Ask Mode Exercise

![ByteStrike Mission](../images/bytestrike.png)

### Background

In the thriving metropolis of Megalopolis, the clandestine agency known as The League safeguards secret blueprints that protect the fate of the world. These blueprints, however, have been fragmented and hidden by the world’s most brilliant minds using advanced cryptographic shields. These shields have embedded traps and decoys in the blueprints to confuse villains.

Eventually, The League digitized these blueprints and stored them in the encrypted League DataVault, only accessible through the League’s secure CyberGrid.

### Objective
You, a newly recruited tech hero (codename: ByteStrike), have been chosen to retrieve and decode one crucial blueprint. The blueprint is kept as a file in the League’s DataVault on the CyberGrid. Your mission: use a secure network call to fetch the blueprint's data. However, the brilliant minds’ misleading “red herrings” must be filtered out using the legendary Pattern Recognition Protocols—legendary Regular Expression algorithms—to expose the actual secrets.

### Specifications

**Data Retrieval:**
- Use your Super-HQ's secure API call to download the blueprint. The file can be located at: `/docs/blueprint.txt`
- The contents will be in plain text format.

**Decoding the Blueprint:**
- The blueprint file holds both secret information and decoy data.
- True secrets follow a vital signature: each is wrapped between `{*` and `*}`, The League's secret markers.
- Extract every real secret from the data stream.

**Output:**
- Present the extracted secrets in an organized, superhero dossier style.
- Do not include any decoy or misleading data in your display.

**Constraints:**
- Code the simulation using GitHub Copilot in any language you prefer (Python or JavaScript are League recommended!).
- Aim for high-performing, readable, and maintainable code. (Tip: Ask Copilot "How can I make this code more readable and maintainable?")
- Output results via the console, superhero-mission style.

**Summary of Tasks:**
- Use a console application to render your mission report.
- Make an HTTP (API) call to download the blueprint data.
- Use regular expressions to find and extract only the marked secrets.
- Display the discovered secrets, ignoring all decoys.
Interesting Fact:
Regular expressions (regex) are a superhero’s utility belt for text—fast, flexible, and able to detect hidden patterns under any disguise. In superhero tech terms, they cut through layers of villainous static to reveal what matters!

### GitHub Copilot Tips

![Copilot Tips](../images/copilot-tips.jpg)

#### Use Copilot to improve efficiency

See if you can use Copilot to find out the complexity (BigO notation) of the code.

1. Open [GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) in the sidebar if it's not already open. Make sure your solution file is still open as well.

1. Ask GitHub Copilot what the complexity of the code is.

1. Ask GitHub Copilot to make the code more efficient.

1. Ask for the complexity again - is it better?

#### Use Copilot to generate code comments

1. Highlight all of the code with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.

1. Press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> to open the inline chat. 

1. Type "/doc"

1. Ask GitHub Copilot to document the function.

#### Use Copilot to simplify your code

1. Open GitHub Copilot in the sidebar.

1. Type "/simplify" and press <kbd>Enter</kbd>. You can also add any text you want after the "/simplify" to give Copilot more instructions.

1. What did GitHub Copilot suggest you do to make it simpler?

#### Got Errors?

GitHub Copilot can help with that too! Just copy the error message and paste it into the chat. Often that's all Copilot needs to resolve your issue.