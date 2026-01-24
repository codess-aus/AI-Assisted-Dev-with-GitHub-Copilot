3. Pair Programming with Copilot: ByteStrike's Growing Decoder

## ByteStrike Levels Up

ByteStrike's decoder works, but now the real work begins. The mission has grown:
- Need to handle multiple secret formats
- Code needs to be production-ready (error handling, logging, type hints)
- The decoder will be used by others on The League, so docs are critical
- Time is running out

This is where pair programming shines. You're no longer just asking for code—you're collaborating with Copilot to solve real problems.

## Learning Objectives

- Use Copilot for real-world refactoring, new feature suggestions, and code documentation
- Practice writing effective prompts for clear, secure, idiomatic code
- Learn how to guide Copilot through complex instructions
- Build a decoder that's maintainable, tested, and documented—not just functional

## Teaching Structure

- **Live demo:** Prompt Copilot through ByteStrike's feature requests (error handling, logging, type hints)
- **Refactoring:** Take the v1 decoder, add tests, improve style with Copilot
- **Documentation:** Use Copilot to generate docstrings and inline docs that explain *why*, not just *what*
- **Edge cases:** Work together with Copilot to find and fix bugs before production

## Lab 3: ByteStrike's Pair Programming Sprint

Your mission is to take ByteStrike's decoder and make it production-ready.

**Tasks:**

1. **Feature Request:** Add support for nested secrets (e.g., `{* outer {* inner *} outer *}`). Prompt Copilot with a clear comment describing the requirement, then iterate on the solution.

2. **Error Handling:** The remote server is unreliable. Ask Copilot to add retry logic, timeout handling, and logging. Use a multi-line prompt to guide it.

3. **Tests:** Write unit tests for the decoder. Start with a simple test structure and let Copilot suggest the rest. Then refine it together.

4. **Documentation:** Generate comprehensive docstrings (Python) or XML comments (C#) that explain the decoder's behavior, parameters, and error conditions.

5. **Code Review:** Read the final code together with Copilot. Ask: "Are there security or performance issues?" and iterate on improvements.

**What you'll learn:** Pair programming isn't about Copilot doing all the work—it's about you directing, and Copilot accelerating. By the end, you have a decoder that ByteStrike can actually ship.