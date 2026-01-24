2. How GitHub Copilot Thinks: Mental Models & Context

## ByteStrike's Problem: Code Prediction Under Uncertainty

ByteStrike's decoder is working, but the output is messy. Comments and variable names affect what Copilot suggests. Variable names affect everything. This part teaches **why**—so you can guide Copilot intentionally.

## Learning Objectives

- Understand Copilot's context window and how models predict
- Learn how prompts (code, comments, file context) shape suggestions
- Recognize why Copilot sometimes predicts well—and sometimes misses the mark
- Apply this knowledge to ByteStrike's decoder to make it cleaner and more maintainable

## Teaching Structure

- **Explain:** Token context, prompt engineering, and model limitations
- **Demo:** Show how Copilot response changes when you rename variables or add docstrings
- **Discussion:** When context works for you—and against you. How to read errors and adjust
- **Hands-on:** ByteStrike's code vs. contextually better code (same logic, different signal)

## Lab 2: ByteStrike's Context Experiments

Your task: Improve ByteStrike's decoder using context engineering—without changing the core logic.

**Experiments:**

1. **Variable naming:** Rename `x` to `secret` in the decoder loop. Watch how Copilot's suggestions change.
2. **Docstrings:** Add a detailed docstring to the `extract_secrets()` function. Observe how Copilot infers error handling.
3. **Comments as signal:** Add inline comments like `# Extract text between {* and *}`. Suggest the next line to Copilot and note the quality.
4. **File structure:** Create two versions of the decoder in the same workspace (e.g., `decoder_v1.py` and `decoder_v2.py` with better naming). Compare Copilot's output in each.

**What you'll learn:** Copilot isn't "guessing"—it's pattern-matching on context. Better context = better code. This lesson applies to everything ByteStrike writes from now on.
