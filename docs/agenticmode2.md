Published Date: 2026-12-01 12th January 2026

Title: What I Learned Using GitHub Agent Mode

Hero image: agentmode2.png

I've been diving deep into GitHub Copilot's AgentMode, and it’s genuinely a game-changer for how I build, debug, and ship code!

Copilot has always been my virtual pair programmer, but Agent Mode takes it a step further. Instead of just suggesting code as I type, Copilot becomes more interactive and can actually execute tasks across my codebase - like refactoring, running tests, or fixing bugs on command. It's like having an AI teammate who understands context, can follow through on bigger tasks, and stays with me through the lifecycle of my project.

**Agent mode can:**

- Analyze your codebase to grasp the full context.
- Plan and execute multi-step solutions.
- Run commands or tests.
- Reach out to external tools for specialized tasks.
- Suggest architectural improvements.
- Run and refine its own work through an agentic loop, including planning, applying changes, testing, and iterating.

What makes Agent Mode stand out for me is how it reduces context switching. Rather than bouncing between tools or endlessly researching, I can describe a high-level goal ("Refactor this function for readability," or "Find and fix every usage of deprecated method"), and Copilot assembles solutions, sometimes even proposing PRs for review.

Here’s what happens when you use Copilot agent mode: 

1. You prompt Copilot with clear requirements on the end result you want.
2. Copilot parses the question and asks an AI language model how to resolve the task, then begins working.
3. Copilot monitors the first iteration for errors and determines how to fix them.
4. Agent mode autonomously uses various tools to get to the end result. 

I love that I'm not limited to just built-in tools. I can extend agent mode’s capabilities by installing more specialised tools from Model Context Protocol (MCP) servers or extensions.

I've started using this with both Python and JavaScript projects (my go-tos!), but I know it works just as well for C#, Java - even up and coming languages like RUST (whatever you like and need) and the time savings and creative boost are real. Knowing I can ask Copilot to handle repetitive or tedious chores, while I focus on more interesting problems, feels like the future of development.

Here are some ways I've been using it:

- Refactoring code (literally every single day)
- Migrating a project to another programming language or to another tech stack (this is how I am learning RUST, it helps me to see something I know done as the language I want to learn - I then use GitHub Copilot in Ask mode a million questions about how it works, what it means, if the order is important etc)
- Writing tests (It's teaching me testing, because I never learnt much on that - totally recommend Playwright btw)
- Modernizing legacy code (so you don’t have to learn an outdated language)
- Autofixing code gen errors (always)
- Adding new features to an application (I love to build a MVP in GitHub Pages, then add features, make it more trustworthy, add security, databases, AI etc. A better architect would start with a better product, but I am a simple girl)
- Prototyping a new app based on a functional spec or UI sketch (I always do this)
- Implementing non-functional requirements or boilerplate code (obs)
- Scoping and planning the work for implementing a new feature (it helps me think)
- Non-code generation tasks, like documentation (this is perfect - I love it!)

If you’re interested in working smarter with AI or just curious about what’s next in coding productivity, definitely check out Agent Mode. GitHub’s vision for Copilot isn’t just autocomplete - it’s collaborative, contextual, and evolving fast. Highly recommend exploring it!

https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode/

