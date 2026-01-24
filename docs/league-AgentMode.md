## The League’s Blueprints - ByteStrike Mission Protocol

![League Blueprint](../images/league-blueprint.jpg)

### Background

In the bustling cityscape of Megalopolis, secret blueprints holding the keys to global security have been scattered and protected by The League using sophisticated security protocols. These protocols embed decoy data and cryptographic traps within the blueprints to ward off evildoers. Over time, these blueprints were digitized and placed in the League’s encrypted DataVault, accessible only through the League CyberGrid.

### Objective

Your mission: develop a system that fetches a digitized blueprint from the secure CyberGrid and decodes it by locating and extracting The League’s authentic secrets. As the League’s newest tech operative (codename: ByteStrike), you’ll use advanced pattern recognition to reveal the true intelligence hidden within, unmasking the secrets vital to the League’s cause.

**In this adventure, you'll master GitHub Copilot Agent Mode** — an autonomous AI assistant that tackles complex tasks, breaking them down step-by-step and assembling complete applications for your heroics!

### Prerequisites

Before you launch your operation, ensure you have:

1. **Installed VS Code** - Get it at [VS Code](https://code.visualstudio.com/).
2. **Enabled GitHub Copilot in VS Code** - Follow [these setup instructions](https://code.visualstudio.com/docs/copilot/setup).

### Learning Outcomes

By completing this League mission with Agent Mode, you’ll learn:

- ✅ How to issue strategic, high-level directives to an AI agent
- ✅ How Agent Mode autonomously sequences and solves complex tasks
- ✅ How to iterate and enhance solutions with your AI sidekick
- ✅ The impact of autonomous coding assistance for rapid app development
- ✅ Best practices for prompting Agent Mode with superhero clarity

### Setting Up Agent Mode

1. **Open VS Code** and sign in to GitHub.
2. **Activate Chat view** by clicking the chat bubble icon.
3. **Select "Agent" mode** from the Chat panel’s dropdown menu.

### Mission Specifications

1. **Blueprint Retrieval:**
   - Establish a secure channel to: `https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt`
   - Data arrives as text, containing both League secrets and decoy signals.

2. **Decoding Protocols:**
   - Authentic League secrets are sandwiched between `{*` and `*}` markers
   - Extract all classified secrets using pattern scanners (regex)
   - Excise all misleading decoy information

3. **Output Requirements:**
   - Structure secrets for clarity and easy briefing
   - Render a visually appealing console interface in League style
   - Clearly distinguish each secret and summary

### Using Agent Mode to Complete the Mission

#### Step 1: Give Agent Mode a Strategic Directive

In Agent Mode Chat, issue a high-level command like:

```
Develop an advanced blueprint decoding system for The League’s DataVault. The system should:

1. Build a JavaScript (or preferred language) console application
2. Fetch the digitized blueprint from:
   https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt
3. Parse for classified League secrets using regular expressions
4. Secrets appear in text between {* and *}
5. Remove all decoy information
6. Present secrets in an immersive League-themed interface
7. Ensure robust error handling for network ops
8. Fully document the mission code and process
9. Deliver readable and maintainable code

Please set up the project structure, code the system, and test it.
```

#### Step 2: Watch Agent Mode Deploy

Agent Mode will:
- 🔍 **Analyze** your workspace and determine appropriate files
- 📁 **Create** the required project skeleton
- 💻 **Write** the agent code
- 🧪 **Run tests** on the application
- 🔧 **Auto-fix** any detected issues

All steps are visible and reviewable in your UI.

#### Step 3: Interact & Upgrade

While Agent Mode operates, you may:
- **Approve/refine** code updates
- **Ask for improvements** such as "Add animated secret reveal for each blueprint"
- **Request explanations**: "Explain the pattern scanner’s regex logic"
- **Extend functionality**: "Allow saving extracted secrets to a League archive file"

#### Step 4: Explore Advanced League Features

After your initial system is live, try directing Agent Mode to:

```
Expand the blueprint decoding tool with the following:
1. Add support for multiple blueprint sources and variable secret markers
2. Develop a web interface control panel for decoded secrets
3. Enable categorization and analysis of all recovered secrets
4. Integrate encryption/decryption for high-security intel
5. Provide detailed operation logs and summary reports
6. Add robust unit tests for decoding logic
7. Show mission progress and download stats
```

### Example Output

When your decoded system runs, expect output like this (AI-generated results will vary, but follow this pattern):

```
🦸 Welcome to LeagueHQ’s DataVault! 🦸

🔓 Establishing secure link to CyberGrid...
✅ Blueprint successfully retrieved from encrypted League archives

🛡️ Initiating decoding protocol...
🎯 Filtering out decoy transmissions...

═══════════════════════════════════════
🚀 CLASSIFIED LEAGUE SECRETS REVEALED 🚀
═══════════════════════════════════════

🗝️ Secret 1: The first secret unlocks the primary vault.

🕵️ Secret 2: The second secret is hidden beneath the League’s encrypted server.

═══════════════════════════════════════
📊 Total Secrets Recovered: 2
🦸 ByteStrike, your mission advances! Classified intelligence secured.
═══════════════════════════════════════
```

### Agent Mode Tips

<a href="#">
    <img src="../../../Images/agent-mode-tips.jpg"  style="width: 830px" />
</a>

#### Effective Prompting for Superhero Missions

1. **Give the Full Mission Context**: Be specific in directives and requirements
2. **Tag Your Preferences**: Note your favorite programming language, styles, or patterns
3. **Clarify Success Criteria**: Describe exactly what “mission accomplished” looks like
4. **Request Best Practice Coding**: Seek clean, documented, and maintainable solutions

#### Leverage Agent Mode’s Superpowers

1. **Let It Operate Fully**: Allow Agent Mode to sequence and solve the mission steps
2. **Review and Approve**: Always inspect readiness before deployment
3. **Iterate and Grow**: Refine and expand on intelligence with further requests
4. **Learn from the League**: See how Agent Mode strategizes and delivers solutions

### Key Considerations for LeagueHQ Missions

**Tool Confirmation & Limits:**
- Agent Mode asks permission before activating any tool or running command
- Maximum of 128 tools can be invoked in one operation
- Requests can be paused or intercepted anytime
- Always confirm suggested operations before execution

### Troubleshooting

If Agent Mode encounters a block:

1. **Check VS Code version**: Use the latest for full League support
2. **Confirm settings**: Make sure `chat.agent.enabled` is active
3. **Mode selection**: Verify “Agent” is chosen in Chat
4. **Authentication**: Be signed in to GitHub with Copilot enabled
5. **Approve operations**: Grant permission for tool activation

### What’s Next for ByteStrike?

Once your hero mission is complete:

1. Try **Advanced League Operations** for deeper missions
2. Experiment with **Custom League gadgets and extensions** using Agent Mode
3. Deploy Agent Mode for **real-world League missions**—perfect for end-to-end app building
4. Share your victory and **help build a stronger League by providing feedback**

Remember: With Agent Mode as your autonomous coding partner, clear goals and strategic teamwork mean you’ll always be ready for the next mission, Master Chief Sparkle!

---

**Interesting Fact:**  
Granting Agent Mode autonomy is like sending out a trusted League sidekick—capable of running complex missions, learning, adapting, and always keeping the good guys one step ahead!